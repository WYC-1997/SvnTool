using SVNPassWord.Models;

namespace SVNPassWord.Services
{
    public class SvnServices : ISvnServices
    {

        protected readonly IConfiguration Configuration;

        public SvnServices(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void UpdatePassWord(Users users)
        {
            var path = Configuration["SVNPasswordPath"];
            var passwords = File.ReadAllText(path);

            var userPwssWords = new List<Users>();
            foreach (var item in passwords.Split("\r\n"))
            {
                if (string.IsNullOrWhiteSpace(item) || item.Contains("\0\0\0\0") || item.Length <= 1) break;
                userPwssWords.Add(new Users
                {
                    Name = item.Split(":")[0],
                    OriginalPassword = item.Split(":")[1]
                });
            }

            if (userPwssWords.Any())
            {
                var find = userPwssWords.FirstOrDefault(i => i.Name == users.Name);
                if (find == null) throw new Exception("用户名不存在");

                var check = CrypterService.CheckPassWord(users.OriginalPassword, find.OriginalPassword);
                if (!check) throw new Exception("原始密码错误");

                var newPassWord = CrypterService.Crypt(users.NewPassword);
                find.NewPassword = newPassWord;

                using FileStream fileStream = new FileStream(path, FileMode.Open, FileAccess.Write, FileShare.Write);
                fileStream.Seek(0, SeekOrigin.Begin);
                using (StreamWriter streamWriter = new StreamWriter(fileStream))
                {
                    foreach (var item in userPwssWords)
                    {
                        var password = string.IsNullOrWhiteSpace(item.NewPassword) ? item.OriginalPassword : item.NewPassword;
                        streamWriter.Write($"{item.Name}:{password}\r\n");
                    }
                    fileStream.Flush();
                    streamWriter.Close();
                }
                fileStream.Close();
            }
        }
    }
}
