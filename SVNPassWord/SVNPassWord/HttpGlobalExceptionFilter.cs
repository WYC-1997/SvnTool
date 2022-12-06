using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace SVNPassWord
{
    public class HttpGlobalExceptionFilter : IExceptionFilter
    {
        /// <summary>
        /// 返回异常信息
        /// </summary>
        /// <param name="context"></param>
        public void OnException(ExceptionContext context)
        {
            context.Result = new ObjectResult(new
            {
                Message = context.Exception.GetBaseException().Message,
                Detail = context.Exception.GetBaseException().StackTrace,
                Code = 500,
            })
            { StatusCode = 200 };
            context.ExceptionHandled = true;
        }
    }
}
