/* Movimiento header */

window.addEventListener("scroll", function () {
  var fixedSection = document.querySelector(".meta");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    fixedSection.classList.add("fixed");
  } else {
    fixedSection.classList.remove("fixed");
  }
});

/* Lenguages */

// Default lenguage

document.addEventListener("DOMContentLoaded", function () {
  const storedLanguage = localStorage.getItem("selectedLanguage");
  const defaultLanguage = storedLanguage || "en";
  toggleLanguage(defaultLanguage);
});

let currentLanguage = "es";

// Change lenguage

function toggleLanguage(language) {
  const currentPage = window.location.pathname;
  currentLanguage = language || (currentLanguage === "en" ? "es" : "en");
  localStorage.setItem("selectedLanguage", currentLanguage);
  const headerJsonPath = `language/${currentLanguage}/header.json`;
  const homeJsonPath = `language/${currentLanguage}/home.json`;
  const aboutJsonPath = `language/${currentLanguage}/about.json`;
  const serviceJsonPath = `language/${currentLanguage}/services.json`;
  const footerJsonPath = `language/${currentLanguage}/footer.json`;
  const contactJsonPath = `language/${currentLanguage}/contact.json`;
  const learnAboutJsonPath = `language/${currentLanguage}/learnAbout.json`;
  const accountingJsonPath = `language/${currentLanguage}/accounting.json`;
  const labourJsonPath = `language/${currentLanguage}/labour.json`;
  const legalJsonPath = `language/${currentLanguage}/legal.json`;
  const residentJsonPath = `language/${currentLanguage}/resident.json`;
  const estateJsonPath = `language/${currentLanguage}/estate.json`;
  const otherJsonPath = `language/${currentLanguage}/other.json`;

  if (currentPage === "/index.html") {
    // Home

    fetch(homeJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("subHeading").textContent = data.subHeading;
        document.getElementById("ctaButton").textContent = data.ctaButton;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en home:", error)
      );

    // About

    fetch(aboutJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeadingAbout").textContent =
          data.mainHeadingAbout;
        document.getElementById("description").textContent = data.description;
        document.getElementById("ctaButtonAbout").textContent =
          data.ctaButtonAbout;
        document.getElementById("learnAbout").textContent = data.learnAbout;
        document.getElementById("experience").textContent = data.experience;
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON en about:", error);
      });

    // Services

    fetch(serviceJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeadingService").textContent =
          data.mainHeadingService;
        document.getElementById("descriptionService").textContent =
          data.descriptionService;
        document.getElementById("buttonService").textContent =
          data.buttonService;
        const serviceItems = document.querySelectorAll(".team-item");
        for (let i = 0; i < data.items.length; i++) {
          const serviceItem = data.items[i];
          const itemTitle = serviceItems[i].querySelector("h5");
          const itemContent = serviceItems[i].querySelector("p");
          const itemButton = serviceItems[i].querySelector("a");
          itemTitle.textContent = serviceItem.title;
          itemContent.textContent = serviceItem.content;
          itemButton.textContent = data.buttonService;
        }
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON en service:", error);
      });
  } else if (currentPage === "/pages/contact.html") {
    // Page contact

    fetch(contactJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeadingContact").textContent =
          data.mainHeadingContact;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("textContact").textContent = data.textContact;
        document.getElementById("descriptionContact").textContent =
          data.descriptionContact;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en contact:", error)
      );
  } else if (currentPage === "/pages/learnAboutUs.html") {
    // Page about learn

    fetch(learnAboutJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
        document.getElementById("quarterDescription").textContent =
          data.quarterDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en learn:", error)
      );
  } else if (currentPage === "/pages/accountingTax.html") {
    // Page Accounting

    fetch(accountingJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en accounting:", error)
      );
  } else if (currentPage === "/pages/labour.html") {
    // Page labour

    fetch(labourJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en labour:", error)
      );
  } else if (currentPage === "/pages/legal.html") {
    // Page legal

    fetch(legalJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en legal:", error)
      );
  } else if (currentPage === "/pages/estate.html") {
    // Page estate

    fetch(estateJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en estate:", error)
      );
  } else if (currentPage === "/pages/resident.html") {
    // Page resident

    fetch(residentJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en resident:", error)
      );
  } else if (currentPage === "/pages/other.html") {
    // Page other

    fetch(otherJsonPath)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("mainHeading").textContent = data.mainHeading;
        document.getElementById("backHome").textContent = data.backHome;
        document.getElementById("site").textContent = data.site;
        document.getElementById("title").textContent = data.title;
        document.getElementById("firstDescription").textContent =
          data.firstDescription;
        document.getElementById("secondDescription").textContent =
          data.secondDescription;
        document.getElementById("thirdDescription").innerHTML =
          data.thirdDescription;
        document.getElementById("quarterDescription").textContent =
          data.quarterDescription;
        document.getElementById("fifthDescription").textContent =
          data.fifthDescription;
      })
      .catch((error) =>
        console.log("Error al cargar el archivo JSON en other:", error)
      );
  }

  // Header
  fetch(headerJsonPath)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("homeLink").textContent = data.home;
      document.getElementById("aboutLink").textContent = data.about;
      document.getElementById("servicesLink").textContent = data.services;
      document.getElementById("labourLink").textContent = data.labour;
      document.getElementById("accountingTaxLink").textContent =
        data.accountingTax;
      document.getElementById("residentLink").textContent = data.resident;
      document.getElementById("legalLink").textContent = data.legal;
      document.getElementById("estateLink").textContent = data.estate;
      document.getElementById("otherLink").textContent = data.other;
      document.getElementById("contactLink").textContent = data.contact;
      document.getElementById("appointmentButton").textContent =
        data.appointment;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON en navbar:", error);
    });

  // Footer

  fetch(footerJsonPath)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("addressHeading").textContent =
        data.addressHeading;

      document.getElementById("popularLinksHeading").textContent =
        data.popularLinksHeading;

      const popularLinksContainer = document.getElementById("popular");
      popularLinksContainer.innerHTML = "";

      data.popularLinks.forEach((link) => {
        const a = document.createElement("a");
        a.classList.add("text", "m-2", "p-2");
        a.href = link.url;
        a.innerHTML = `<i class="fa fa-angle-right m-2"></i>${link.text}`;
        popularLinksContainer.appendChild(a);
      });

      document.getElementById("rightsReserved").textContent =
        data.rightsReserved;
      document.getElementById("address").textContent = data.address;
      document.getElementById("phone").textContent = data.phone;
      document.getElementById("email").textContent = data.email;
    })
    .catch((error) =>
      console.log("Error al cargar el archivo JSON en footer:", error)
    );
}

/* Top button */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(document).on("click", ".back-to-top", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "swing");
    return false;
  });
});

/* Send email */

function sendEmail() {
  const email = "asesoria@hotmail.com";
  const mailtoLink = `mailto:${email}`;
  window.open(mailtoLink, "_blank");
}
