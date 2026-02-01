export const projects = [
    {
        id: "1",
        name: "Truhlářství Gryč",
        description: "První projekt založený na Next.js. Původní myšlenka byla vytvořit vizuálně přívětivou stránku, ale spíš se z toho stal takový Next.js playground, kde jsem zkoušel základní Next.js funkce, Motion a deployment přes Vercel.",
        challenges: [
            "Chtěl jsem udělat hezkou s vícero stránkami pro vyzkoušení App Routeru, ale neměl jsem pro to dostatek obsahu, tak jsem nakonec udělal jen jednu stránku s vícero sekcemi"
        ],
        todos: [],
        image: "/truhlarstvi-gryc.png",
        background: "#94AE95",
        linkWebsite: "https://truhlarstvi-gryc.vercel.app/",
        linkGithub: "https://github.com/LukyGryc/truhlarstvi-gryc"
    },
    {
        id: "2",
        name: "OnlyPans",
        description: "Mini eshop zaměřený na ty nejlepší pánve, které vaří skoro za vás. Plán tohoto projektu byl vyzkoušet si práci s databází, cachingem a dynamickými stránkami.",
        challenges: [
            "Chtěl jsem udělat hezké menu, ale čím více jsem ho používal, tím více jsem na něm narážel na problémy",
            "Mobilní layout má pár much"
        ],
        todos: [
            "Přidat page která se ukáže po dokončení objednávky"
        ],
        image: "/only-pans.png",
        background: "#729EA1",
        linkWebsite: "https://only-pans-demo.vercel.app/",
        linkGithub: "https://github.com/LukyGryc/only-pans"
    },    
    {
        id: "3",
        name: "Savora",
        description: "Projekt ode mě pro mě, který bych rád používal a rozvíjel dál. Zatím je to jen MVP, kde zatím největší pozornost dostaly databáze a user authentication.",
        challenges: [
            "Mobilní layout, protože kalendář je relativně malý na mobilu, tabulku s daty jsem nakonec schoval a bar chartu předělal osu",
            "Formát dat tak, aby dával smysl. V tabulkách jsem potřeboval data podle datumů (data podle dat?), zatímco v chartu podle kategorie"
        ],
        todos: [
            "Přidat další charty do dashboardu",
            "User specific kategorie",
            "Password reset, email reset, email verification a forgot your password features"
        ],
        image: "/personal-page.png",
        background: "#B5BD89",
        linkWebsite: "",
        linkGithub: "https://github.com/LukyGryc/savora"
    },    
    {
        id: "4",
        name: "Personal Page",
        description: "Stránka na které jsem se chtěl trochu představit, sloužit jako životopis, portfolio, a zároveň se trochu vyblbnout a vyzkoušet si nové komponenty, a sem tam přidat menší easter egg. ",
        challenges: [
            "Původně jsem si chtěl vyzkoušet práci s WP Headless CMS, ale setup od hostingu až po pluginy zmíněné ve vašem článku bych momentálně nestíhal",
            "Některé animace jsem musel předělat kvůli mobilnímu layoutu"
        ],
        victories: [
            "Light/Dark mode toggle"
        ],
        todos: [],
        image: "/personal-page.png",
        background: "#CABE91",
        linkWebsite: "",
        linkGithub: "https://github.com/LukyGryc/personal-page"
    },
];