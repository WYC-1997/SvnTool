using Microsoft.AspNetCore.Mvc;
using SVNPassWord.Models;
using SVNPassWord.Services;

namespace SVNPassWord.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SvnController : ApiController
    {
        protected readonly ISvnServices SvnServices;

        /// <summary>
        /// ���캯��
        /// </summary>
        /// <param name="svnServices"></param>
        public SvnController(ISvnServices svnServices)
        {
            SvnServices = svnServices;
        }

        /// <summary>
        /// �޸�����
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult<object> UpdatePassWord([FromBody] Users users)
        {
            SvnServices.UpdatePassWord(users);
            return Ok(true);
        }
    }
}