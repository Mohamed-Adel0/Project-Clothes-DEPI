// Here Related By Array Of Object to run Products
const singalProducts = [
    {
      id: 1,
      image: "./Picture/Footer_logo.png",
      paragraph:
        "Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue non gravida.",
    },
];
const Products = [
  {
    id: 1,
    title: "Havanna shirt",
    paragraph: "CLOTHINGS, SHIRTS",
    Salle: 14.99,
    imageOne: "./Picture/1.jpg",
  },
  {
    id: 2,
    title: "Black glasses",
    paragraph: "ACCESSORIES",
    Salle: 8.99,
    imageOne: "./Picture/2.jpg",
  },
  {
    id: 3,
    title: "Black glasses",
    paragraph: "ACCESSORIES",
    Salle: 10.99,
    imageOne: "./Picture/3.jpg",
  },
  {
    id: 4,
    title: "Simple hat",
    paragraph: "ACCESSORIES",
    Salle: 12.99,
    imageOne: "./Picture/4.jpg",
  },
  {
    id: 5,
    title: "Season shoes",
    paragraph: "ACCESSORIES",

    Salle: 10.99,
    imageOne: "./Picture/5.jpg",
  },
  {
    id: 6,
    title: "Fantasy t-shirt",
    paragraph: "ACCESSORIES",

    Salle: 7.99,
    imageOne: "./Picture/6.jpg",
  },
  {
    id: 7,
    title: "Fantasy pants",
    paragraph: "ACCESSORIES",
    Salle: 15.99,
    imageOne: "./Picture/7.jpg",
  },
  {
    id: 8,
    title: "Shoulder bag",
    paragraph: "ACCESSORIES",
    Salle: 20.99,
    imageOne: "./Picture/2.jpg",
  },
];
const FooterProd = [
  {
    id: 2,
    title: "Products",
    image1: "./Picture/Item_10-660x660.jpg",
    image2: "./Picture/Item_11-660x660.jpg",
    detalis: "Fantasy pants",
    delet: "£25.99",
    sale: "£15.99",
    watch: "Black Glasses",
    watchsale: "£10.99",
  },
  {
    id: 3,
    title: "Top Rated Products",
    image1: "./Picture/Item_9-660x660.jpg",
    image2: "./Picture/Item_3-660x660.jpg",
    detalis: "Havanna shirt",
    delet: "£21.99",
    sale: "£11.99",
  },
];

const item = () => {
  let carton = ``;
  for (let i = 0; i < Products.length; i++) {
    carton += `
        <div class="card">
                <div class="image">
                    <img src=${Products[i].imageOne} alt="">
                </div>
               <div class="paragraph">
                <div class="sallary">
                    <h3>${Products[i].title}</h3>
                <p>$ ${Products[i].Salle}</p>
                </div>
                <div class="sallary">
                    <a href="${Products[i].id}">Read More</a>
                    <button>Add To Cart</button>
                </div>
               </div>
            </div>
        `;
  }
  let FooteranotherCard = ``;
  for (let i = 0; i < FooterProd.length; i++) {
    FooteranotherCard += `
      <div class="card">
        <h3>${FooterProd[i].title}</h3>
        <div class="box">
          <div class="img">
            <img src="${FooterProd[i].image1}" alt="" />
          </div>
          <div class="text">
            <h4>${FooterProd[i].detalis}</h4>
            <div class="sale">
              <h5>
                <del>${FooterProd[i].delet}</del>
              </h5>
              <h5>${FooterProd[i].sale}</h5>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="${FooterProd[i].image2}" alt="" />
          </div>
          <div class="text">
            <h4>${FooterProd[i].detalis}</h4>
            <div class="sale">
              <h5>
                <del>${FooterProd[i].delet}</del>
              </h5>
              <h5>${FooterProd[i].sale}</h5>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  let SingalCard = ``;
  for (let i = 0; i < singalProducts.length; i++) {
    SingalCard += `
      <div class="card">
        <div class="img">
          <img src="${singalProducts[i].image}" alt="" />
        </div>
        <p>${singalProducts[i].paragraph}</p>
      </div>
    `;
  }

  document.getElementById("cards").innerHTML = SingalCard + FooteranotherCard;
  document.getElementById("container").innerHTML = carton;
};
item();
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (window.scrollY >= 1) {
            navbar.classList.add("change-scroll-navbar");
            // console.log("True");
        } else {
            navbar.classList.remove("change-scroll-navbar");
            // console.log("False");
        }
    }
});

// Here Related By Remove element Chat
document.getElementById("closeElement").addEventListener("click",
    () => {
    document.getElementById("chat").style.display = "none"
})
document.getElementById("containerchat").addEventListener("click", () => {
    document.getElementById("chat").style.display = "flex";
});

// This is specifically related to the chat section. 
const suggestedWords = [
    "مرحبا" , "السلام عليكم" , "من انت" , "وداعا" ,"اريد فتح حساب" , "نسيت كلمة المرور" , "كم الساعه الان", "اريد التواصل مع خدمة العملاء",
    "شكرا", 
    "hi", "how are you", "how are you?","what is your name?" , "i want to open an account", "who are you?",
    "what are your services?", "what time is it?","i want to file a complaint",  , "thanks", "bye"
  ];
  
  const displaySuggestedWords = () => {
    const suggestionsContainer = document.getElementById("suggestions");
                
    suggestionsContainer.innerHTML = "<h3>Helpful phrases for your request</h3>";
  
    suggestedWords.forEach(word => {
      const button = document.createElement("button");
      button.className = "suggested-word";
      button.textContent = word;
      button.addEventListener("click", () => {
        userInput.value = word;
      });
      suggestionsContainer.appendChild(button);
    });
  };
  
  window.onload = displaySuggestedWords;
  
  const responses = {
    "hello": "Hello, How I can help you?",
    "مرحبا": "مرحبا، كيف يمكنني مساعدتك؟",
    "اريد التواصل مع خدمة العملاء": "تم تسجيل شكوتك وسنقوم بالتواصل معك قريبًا.",
    "شكرا": "على الرحب والسعة! نحن هنا لمساعدتك دائمًا.",
    "bye": "Goodbye! Have a great day!",
    "hi": "Hello! How can I assist you today?",
    "السلام عليكم": "وعليكم السلام ورحمة الله وبركاته، كيف يمكنني مساعدتك؟",
    "how are you?": "I'm just a bot, but I'm here to help you!",
    "من انت": "أنا مساعد افتراضي، هنا لأقدم لك الدعم والمساعدة.",
    "who are you?": "I'm your virtual assistant, here to assist you with anything you need.",
    "thanks": "You're welcome! Let me know if you need anything else.",
    "وداعا": "مع السلامة! أتمنى لك يومًا سعيدًا.",
    "اريد فتح حساب": "يمكنك فتح حساب عن طريق زيارة موقعنا الرسمي واتباع التعليمات.",
    "i want to open an account": "You can open an account by visiting our official website and following the instructions.",
    "what are your services?": "We offer a wide range of services. Can I assist you with something specific?",
    "نسيت كلمة المرور": "يمكنك إعادة تعيين كلمة المرور من خلال خيار 'نسيت كلمة المرور' على موقعنا.",
    "i forgot my password": "You can reset your password using the 'Forgot Password' option on our website.",
    "اريد تقديم شكوي": "يرجى توضيح الشكوى، وسنقوم بمراجعتها في أسرع وقت ممكن.",
    "i want to file a complaint": "Please provide details about your complaint, and we will review it as soon as possible.",
    "ما هو اسمك": "أنا مجرد مساعد افتراضي، يمكنك مناداتي بـ 'المساعد' أو 'الروبوت'.",
    "what is your name?": "I'm just a virtual assistant. You can call me 'Assistant' or 'Bot'.",
    "كم الساعة الان": "أنا روبوت ولا أملك ساعة، لكن يمكنك التحقق من الوقت على جهازك. 😊",
    "what time is it?": "I'm not equipped with a clock, but you can check the time on your device! 😊",
    "كيف يمكنني مساعدتك": "أنا هنا للمساعدة في أي استفسار أو طلب. فقط اسأل!",
    "how can i help you?": "I'm here to assist you with any question or request. Just ask!",
    default: "عذرًا، لا أفهم ما تقصده. يمكنك إعادة صياغة السؤال أو طلب مساعدة محددة."
  };
  
  const chatForm = document.getElementById("chat-form");
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  
  const addMessage = (sender, message) => {
    const messageDiv = document.createElement("div");
    messageDiv.className = `${sender} same-style`;
    messageDiv.innerHTML = sender === "client"
      ? `<button><i class="fa-solid fa-user"></i></button><p>${message}</p>`
      : `<p>${message}</p><button><i class="fa-solid fa-robot"></i></button>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  };
  
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage("client", userMessage);
      const loadingDiv = document.createElement("div");
      loadingDiv.className = "bot same-style";
      loadingDiv.innerHTML = `<p>Loading...</p><button><i class="fa-solid fa-robot"></i></button>`;
      chatBox.appendChild(loadingDiv);
  
      setTimeout(() => {
        loadingDiv.remove();
        const botResponse = responses[userMessage.toLowerCase()] || responses.default;
        addMessage("bot", botResponse);
      }, 2000);
  
      userInput.value = "";
    }
  });
  
