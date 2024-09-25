const microsoft = {

    pageTitle: "Cloud Computing Services | Microsoft Azure",

    header: {

        menu: "images/hamburger-menu.svg",

        searchbutton:"images/searchbtn.png",

        logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",

        text:"Azure",
        icon:"images/down-arrow.png",

        lists: [

            {
                title:" <span id='exp'> Explore </span>",
                icon: "images/down-arrow.png"
            },
            {
                title:"<span id = 'pro'> Products </span>",
                icon: "images/down-arrow.png"
            },
            {
                title:"Solutions",
                icon: "images/down-arrow.png"
            },
            {
                title:"Pricing",
                icon: "images/down-arrow.png"
            },
            {
                title:"Partners",
                icon: "images/down-arrow.png"
            },
            {
                title:"Resources",
                icon: "images/down-arrow.png"
            },
            {
                title:"More",
                icon: "images/down-arrow.png"
            }
        ],

        inlist: [
            "Get to know Azure",
            "Global infrastructure",
            "FinOps on Azure",
            "Customer stories",
            "Azure innovation insights"
        ],
        // inlist2:[
        //     "Azure Virtual Machines",
        //     "Azure Virtual Desktop",
        //     "Azure SQL",
        //     "Azure AI Services",
        //     "Azure AI Studio",
        //     "Azure Cosmos DB"
        // ],

        txt:"Azure",

        srchbtn: "images/searchbtn.png",

        list2:[

            {
                text:"Learn"
            },
            {
                text:"Support"
            },
            {
                text:"Contact Sales"
            },
            {
                text:"<span>Get started with Azure</span>"
            },
            {
                text:"<p> Sign in <p>"
            }
        ],

        search: "Search",
        srchbtn3: "images/searchbtn.png",

        uls:[
            "Home","Explore","Products","Solutions","Pricing","Partners",
            "Resources","Learn","Support","Contact Sales","Get started with Azure","Sign in"
        ]

    },

    banner: {
        backgroundimage1: "images/Mobile-bg.avif",
        backgroundimage2:"images/Mobile-hero-bg2.avif",
        subhead:"azure. limitless innovation.",
        title: "Is your infrastructure AI-ready?",
        subtitle: "Migrate to Azure today to start building on an infrastructure purpose-built for AI workloads. Pay as you go or try Azure free for up to 30 days. There's no upfront commitment—cancel anytime.",
        actionButton: {
            get: "Get started",
            try: "Try Azure for free"
    }
    },

    stickynav:{
        uls:[
            "Featured news",
            "Solutions",
            "Products and services",
            "Resources by role",
            "Customer stories"
        ],
        text:"Get started with Azure"
    },
    
    arrows:{
        left:"images/leftArrow.png",
        right:"images/rightArrow.png"
      },
      
    arrowdown:{
        image:"images/down.png"
    },

    main:{
        section1:{
            bgMob:"images/section1-bg-Mobile-feature-BG-2x-1.avif",
            bgDesk:'images/Desktop-feature-BG-4x-070924ACOMhp.avif',
            subhead:"featured news",
            head:"Discover what's happening on Azure",
            cards:[
                {
                    image:"images/grid1-img-Desktop-feature-img1@2x.avif",
                    heading:"Purchase GitHub on Azure",
                    para:"Scale and provision the entire GitHub suite of services from the Azure portal.",
                    arrow:"images/rightArrow.png",
                    text:"Learn more"
                },
                {
                    image:"images/grid2-img-Desktop-feature-img2@2x.avif",
                    heading:"Create custom dev workstations",
                    para:"Get set up for success by creating, customizing, and connecting to dev boxes with Dev Home.",
                    arrow:"images/rightArrow.png",
                    text:"Explore Microsoft Dev Box"
                },
                {
                    image:"images/grid3-img-Desktop-feature-img3@2x.avif",
                    heading:"Discover the AI Toolkit for Visual Studio Code",
                    para:"Explore,try,fine-tune,and integrate state-of-the-art models into your applications.",
                    arrow:"images/rightArrow.png",
                    text:"Learn more"
                }
            ]
        },

        section2:{
            subhead:'solutions',
            head:'Find solutions for putting your ideas into action',
            features:[
                "Featured solutions",
                'Cloud migration',
                'Data transformation',
                'App development',
                'AI'
            ],
            uls:
                [
                {
                    text:'AI',
                    btn:'',
                    p:'Build intelligent apps at enterprise scale with the Azure AI portfolio',
                    a:'Explore Azure AI solutions',
                    image:'images/AI-img1-351994-Desktop-Solutions-Featured-Tab1-800x636.avif'
                },
                {
                    text:'Responsible AI with Azure',
                    btn:'',
                    p:'Develop, use, and govern AI solutions responsibly with Azure AI',
                    a:'Discover responsible AI solutions',
                    image:'images/AI-img2-351994-Desktop-Solutions-Featured-Tab2-800x636.avif'
                },
                {
                    text:'Trust your cloud',
                    btn:'',
                    p:'Get security, reliability, and sustainability from the ground up-backed by a team of experts, and proactive compliance trusted by enterprises, governments, and startups.',
                    a:'Learn more',
                    image:'images/AI-img3-351994-Desktop-Solutions-Featured-Tab3-800x636.avif'
                },
                {
                    text:'Azure Confidential Computing',
                    btn:'',
                    p:'Increase data privacy by protecting data in use',
                    a:'Learn about confidential computing',
                    image:'images/AI-img4-351994-Desktop-Solutions-Featured-Tab4-800x636.avif'
                },
                {
                    text:'Build and modernize intelligent apps',
                    btn:'',
                    p:'Build AI-powered, intelligent apps and enhance your critical solutions with generative AI',
                    a:'Learn more',
                    image:'images/AI-img5-351994-Desktop-Solutions-Featured-Tab5-800x636.avif'
                }
            ],
            arrw:'',
            a:'View all solutions(40+)'
        }

    }

}

// .............................................................................................


document.addEventListener("DOMContentLoaded", function(){

    function buildTeamsPage(){

        document.title = microsoft.pageTitle

        const headerTop = document.getElementById("header-top")
        
       //header1
        const menuImg = document.getElementById("menu-img")
        menuImg.src = microsoft.header.menu
        const searchButton = document.getElementById("searchbtn")
        searchButton.src = microsoft.header.searchbutton

        const microsoftLogo = document.getElementById("microsoft")
        microsoftLogo.src = microsoft.header.logo
        microsoftLogo.addEventListener('click',function(){
            const url = "https://www.microsoft.com/en-in/"
            window.location.href = url
        })

        const azureName = document.getElementById("azure-name")
        azureName.innerHTML = microsoft.header.text
        const downArrow = document.getElementById("down-arrow-btn")
        downArrow.src = microsoft.header.icon

        // dropdown menu
        const headerBottom = document.querySelector('.header-bottom')
        const ulNavbar = document.querySelector('.navbarAzure')
        const ulNavul = document.createElement('ul')
        microsoft.header.uls.forEach(item =>{
            const liss = document.createElement('li')
            liss.innerHTML = `<a href = #>${item}</a>` 
            ulNavul.append(liss)
            ulNavbar.append(ulNavul)
        })
        // dropdown fn
           headerBottom.addEventListener('click',()=>{
                    toggleDown() 
                        
           })
           function toggleDown(){
            const ulNavbar = document.querySelector('.navbarAzure')
            if(ulNavbar.style.display === 'none' || ulNavbar.style.display ===''){
                ulNavbar.style.display = 'block'
                downArrw()
            } else{
                ulNavbar.style.display = 'none'
            }
           }

           function downArrw(){
                downArrow.style.transform = `rotate(180deg)`
           }
        //.................................. header2 with dropdown fn .............................

           // header2
           const listMenu = document.getElementById("list-menu");
           microsoft.header.lists.forEach(item => {
               const listItems = document.createElement('li');
               listItems.innerHTML =
                   `<a href="#">${item.title}<img src="${item.icon}"></a>`;
               
               listMenu.appendChild(listItems);
   
               // Add event listener to "Explore" for dropdown functionality
               if (item.title.includes('Explore')) {
                   listItems.querySelector('a').addEventListener('click', function (event) {
                       event.preventDefault(); // Prevent default link behavior
                       toggleDropdown();
                   });
               }
           });

           // Create and append dropdown content
           const dropdownMenu = document.getElementById('dropdown-menu');
           microsoft.header.inlist.forEach(item => {
               const dropdownItem = document.createElement('a');
               dropdownItem.href = '#';
               dropdownItem.innerHTML = item;
               dropdownMenu.appendChild(dropdownItem);
           });
   
           // Function to toggle dropdown visibility
           function toggleDropdown() {
               const dropdown = document.getElementById('dropdown-menu');
               if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                   dropdown.style.display = 'block';
               } else {
                   dropdown.style.display = 'none';
               }
           }
   
           // Close dropdown if clicking outside
           document.addEventListener('click', function (event) {
               const dropdown = document.getElementById('dropdown-menu');
               const expButton = document.querySelector('#list-menu a');
               if (dropdown && !expButton.contains(event.target) && !dropdown.contains(event.target)) {
                   dropdown.style.display = 'none';
               }
           });

        // ..........................................................................

        const azureTxt = document.getElementById("text-azure")
        azureTxt.innerHTML = microsoft.header.txt
        
        const srchBtn = document.getElementById("searchbtn2")
        srchBtn.src = microsoft.header.srchbtn

        const signIn = document.getElementById("signins")
        microsoft.header.list2.forEach( item => {
            const list2Items = document.createElement('li')
            list2Items.innerHTML = 
            `<a href = "#"> ${item.text} </a>`

            signIn.appendChild(list2Items)
        });

        const searchBtn3 = document.getElementById("search_text")
        searchBtn3.innerHTML = microsoft.header.search
        const srchBtn3 = document.getElementById("searchbtn3")
        srchBtn3.src = microsoft.header.srchbtn3

        const backgroundImage1 = document.getElementById("mobile_image")
        backgroundImage1.src = microsoft.banner.backgroundimage1
        const backgroundImage2 = document.getElementById("mobile_image2")
        backgroundImage2.src = microsoft.banner.backgroundimage2


        const innoVation = document.getElementById("innovation")
        innoVation.innerHTML = microsoft.banner.subhead

        const titleHead = document.getElementById("banner_head")
        titleHead.innerHTML = microsoft.banner.title

        const subTitle = document.getElementById("banner_para")
        subTitle.innerHTML = microsoft.banner.subtitle

        const startButton = document.getElementById("get")
        startButton.innerHTML = microsoft.banner.actionButton.get
        startButton.addEventListener('click',function(){
            const url = 'https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account'
            window.location.href = url
        })

        const tryButton = document.getElementById("try")
        tryButton.innerHTML = microsoft.banner.actionButton.try
        tryButton.addEventListener('click', function(){
        const url = 'https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account'
        window.location.href = url
    });

    const stickyNav = document.getElementById('nav_uls')
    microsoft.stickynav.uls.forEach( item => {
        const ulItems = document.createElement('li')
        ulItems.innerHTML = 
        `<a href = "#"</a> <div class = "indicator"></div> 
        <span class = "features">${item}</span> `

        stickyNav.appendChild(ulItems)
    })

    const arrowDown = document.getElementById('dwn_arw').src = microsoft.arrowdown.image

    const clickArrow = document.getElementById('dwn_arw')
    clickArrow.addEventListener('click', function(){
        clickArrow.classList.toggle('in-active')
    })


    const stickyRight = document.getElementById('nav_rit_in')
    stickyRight.innerHTML = microsoft.stickynav.text
    stickyRight.addEventListener('click', function(){
        const url = 'https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account'
        window.location.href = url
    });

    const leftArrowButton = document.querySelector(".left_arrow");
    const rightArrowButton = document.querySelector(".right_arrow");

    leftArrowButton.querySelector('img').src = microsoft.arrows.left;
    rightArrowButton.querySelector('img').src = microsoft.arrows.right;

    // const removeAllActiveClasses = () =>{
    //     stickyNav.forEach((tab) => {
    //         tab.classList.remove("active")
    //     })
    // }
    // stickyNav.forEach(tab=>{
    // tab.addEventListener('click', ()=>{
    //     removeAllActiveClasses();
    //     tab.classList.add("active")
    // })
    // })

    const container = document.querySelector('.nav_left');
    const leftArrowContainer = document.getElementById('l_arw');
    const rightArrowContainer = document.getElementById('r_arw');

    // leftArrowButton.addEventListener('click', function() {
    //     // container.scrollBy({
    //     //     left: -100,
    //     //     behavior: 'smooth'
    //     // });
    //     // container.scrollLeft += 500
    // });


    // ...................... scroll features when arrow button is clicked ...............................

    leftArrowButton.addEventListener('click', function() {
        container.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    rightArrowButton.addEventListener('click', function() {
        container.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });

    // ................................................................................................................
          
    const sectionOneBgMOb = document.getElementById("sec1_bgMob").src = microsoft.main.section1.bgMob
    const sectionOneBgDesk = document.getElementById("sec1_bgDesk").src = microsoft.main.section1.bgMob
    const innoVation2 = document.getElementById("feature").innerHTML = microsoft.main.section1.subhead
    const headOne = document.getElementById("head").innerHTML = microsoft.main.section1.head
    const cardSections = document.querySelector(".content_grid")
    microsoft.main.section1.cards.forEach(item => {
        const cardItems = document.createElement('div')
        cardItems.classList.add("section1_cards")
        cardItems.innerHTML = 
        `<div class = "cardtop_pad"> <div class="card_image"><img src = ${item.image}></div></div>
        <div class = "card_content"> <div> <h3>${item.heading}</h3>
        <p>${item.para}</p></div>
        <div class = "card_footer"><button class = "card_btn"><img src="${item.arrow}"></button><p>${item.text}</p></div></div>`

        cardSections.appendChild(cardItems)
    })

    // .........................
    const sectionTwoSubHd = document.querySelector('.sol').innerHTML = microsoft.main.section2.subhead
    const sectionTwoHd = document.querySelector('.head2').innerHTML = microsoft.main.section2.head
    const contentA = document.querySelector('.contentA')
    microsoft.main.section2.features.forEach(item =>{
        const feats = document.createElement('button')
        feats.className = 'btn'
        feats.innerHTML = `<span>${item}</span>`
      contentA.append(feats)
    })

    const bWrites = document.querySelector('.Bwrites')
    const theUls = document.createElement('ul')
    microsoft.main.section2.uls.forEach(item =>{
        const lis = document.createElement('li')
        lis.innerHTML = `
        <span class='indicator'></span>
        <div class='conts'>
        <div class='cont1'> <button>${item.text} ${item.btn}</button></div>
        <div class='cont2'>
            <p>${item.p}</p>
            <a href='#'>${item.a}</a>
            <div class='image'><img src ='${item.image}'></div>
        </div>
        </div>
        `
        theUls.append(lis)
        bWrites.append(theUls)
    })
    const btn = document.getElementById('btn').src = microsoft.main.section2.arrw
    const view = document.getElementById('view').innerHTML = microsoft.main.section2.a  

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            removeActive();
            btn.classList.add('active');
        });
    });
    const removeActive = () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
    };

    
    // .........................

    }

    buildTeamsPage()
})