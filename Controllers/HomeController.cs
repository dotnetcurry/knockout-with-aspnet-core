using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KnockoutDemo.ViewModels;

namespace KnockoutDemo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult TabSelector()
        {
            return View();
        }
        public IActionResult KnockoutMvc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult KnockoutMvc(SimpleTextViewModel model)
        {
            return View(model);
        }
        public IActionResult Error()
        {
            return View();
        }
    }
}
