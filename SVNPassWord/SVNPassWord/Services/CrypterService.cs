using CryptSharp;

namespace SVNPassWord.Services
{
    public class CrypterService
    {
        public static string Crypt(string passWord)
        {
            return Crypter.MD5.Crypt(passWord, new CrypterOptions()
              {
                { CrypterOption.Variant, MD5CrypterVariant.Apache }
              });
        }

        public static bool CheckPassWord(string passWord, string cryptedPassword)
        {
            return Crypter.CheckPassword(passWord, cryptedPassword);
        }
    }
}
