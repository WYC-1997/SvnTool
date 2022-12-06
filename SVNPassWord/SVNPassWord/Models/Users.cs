namespace SVNPassWord.Models
{
    public class Users
    {
        /// <summary>
        /// 用户名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 原始密码
        /// </summary>
        public string OriginalPassword { get; set; }

        /// <summary>
        /// 新密码
        /// </summary>
        public string NewPassword { get; set; }
    }
}
