export const projects = [
    {
        id: "1",
        name: "Truhlářství Gryč",
        description: "První projekt založený na Next.js. Původní myšlenka byla vytvořit vizuálně přívětivou stránku, ale spíš se z toho stal takový Next.js playground, kde jsem zkoušel základní Next.js funkce, Motion a deployment přes Vercel.",
        challenges: [
            "Chtěl jsem udělat hezkou webovku s vícero stránkami pro vyzkoušení App Routeru, ale neměl jsem pro to dostatek obsahu, tak jsem nakonec udělal jen jednu stránku s vícero sekcemi"
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
            "Menu v mé hlavě vypadalo lépe, ale nakonec jsem ho nechal, protože nebylo předmětem tohoto projektu",
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
        description: "Projekt ode mě pro mě, který bych rád používal a rozvíjel dál. Měl by sloužit jako tracker výdajů s menšími analýzami. Zatím je to WIP, kde největší pozornost dostaly databáze a user authentication.",
        challenges: [
            "Mobilní layout, protože kalendář je relativně malý na mobilu, tabulku s daty jsem nakonec schoval a bar chartu předělal osu",
            "Formát dat tak, aby dával smysl. V tabulkách jsem potřeboval data podle datumů (data podle dat?), zatímco v chartu podle kategorie",
            "Tabulka s daty vypadá lépe když je v ní více dat"
        ],
        todos: [
            "Přidat další charty do dashboardu",
            "User specific kategorie (i barvy) a měna",
            "Export dat do CSV",
            "Možnost zaškrnout \"Exclude from analysis\" pro specifické itemy, které mohou být jednorázovýnm výdajem",
            "Password reset, email reset, email verification a forgot your password features",
            "Upravit styling Tracking panelu když je v něm moc itemů, aby byl zarovnaný s kalendářem"
        ],
        image: "/savora.png",
        background: "#B5BD89",
        linkWebsite: "https://savora-demo.vercel.app/",
        linkGithub: "https://github.com/LukyGryc/savora"
    },    
    {
        id: "4",
        name: "Personal Page",
        description: "Stránka na které jsem se chtěl trochu představit, má sloužit jako životopis i portfolio. Zároveň jsem si chtěl vyzkoušet různé komponenty, trochu se vyblbnou a sem tam přidat menší easter egg.",
        challenges: [
            "Některé animace jsem musel předělat kvůli mobilnímu layoutu"
        ],
        todos: [],
        image: "/personal-page.png",
        background: "#CABE91",
        linkWebsite: "",
        linkGithub: "https://github.com/LukyGryc/personal-page"
    },
];