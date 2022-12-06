using SVNPassWord;
using SVNPassWord.Services;


string DefaultPolicyKeyName = "DefaultPolicy";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddControllers();

builder.Services.AddControllers(
    options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddControllersWithViews(options => { options.Filters.Add(typeof(HttpGlobalExceptionFilter)); });

builder.Services.AddScoped<ISvnServices, SvnServices>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(policy =>
{
    policy.AddPolicy(DefaultPolicyKeyName, opt => opt
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(DefaultPolicyKeyName);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
