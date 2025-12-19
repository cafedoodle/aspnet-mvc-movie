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
    public async Task<ActionResult> GetUserData(string username)
    {
        var userData = await FetchUserDataAsync(username);
        return Content(userData, "application/json");
    }

    private async Task<string> FetchUserDataAsync(string username)
    {
        // Hardcoded secret (API key)  
        string apiKey = "12345-ABCDE-67890-FGHIJ";

        string url = $"https://api.example.com/users/{username}?api_key={apiKey}";

        using (HttpClient client = new HttpClient())
        {
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsStringAsync();
            }
            else
            {
                return "{\"error\": \"User not found\"}";
            }
        }
    }
    //

 }