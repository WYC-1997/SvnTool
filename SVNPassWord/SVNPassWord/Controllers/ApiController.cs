using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SVNPassWord.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : Controller
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public ApiController()
        {
        }
        /// <summary>
        /// 返回
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="resp"></param>
        /// <param name="code"></param>
        /// <returns></returns>
        protected ActionResult<object> Ok<T>(T resp, int code = 200)
        {
            return new { Data = resp, Code = code };
        }
    }
}
