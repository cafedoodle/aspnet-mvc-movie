using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers;

public class HelloWorldController : Controller
{
    // 
    // GET: /HelloWorld/
    public IActionResult Index()
    {
        return View();
    }
    // GET: /HelloWorld/Welcome/ 
    public IActionResult Welcome(string name, int numTimes = 1)
    {
        ViewData["Message"] = "Hello " + name;
        ViewData["NumTimes"] = numTimes;
        return View();
    }

    //
    // GET: User/GetUserData/{username}  
    public ActionResult GetUserData(string username)
    {
        User user = GetUserByUsername(username); // This method can return null  
        string userEmail = user.Email; // Potential Null Pointer Dereference  

        return Content(userEmail ?? "User not found", "text/plain");
    }

    private User GetUserByUsername(string username)
    {
        // Simulating a user retrieval that might return null  
        return null; // Simulating a case where user is not found  
    }

    public class User
    {
        public string Email { get; set; }
    }
    //

}