# Rozcestnik-studovna
Domovská stránka a nápověda pro počítače na studovnách v MZK

vknihovne.mzk.cz

# Jak upravovat stránky nápovědy
Stránky jsou napsané ve formátu Markdown. Zde najdete co je to [Markdown](https://cs.wikipedia.org/wiki/Markdown) a [jak jej psát](https://daringfireball.net/projects/markdown/).
Github používá také formát Markdown, stránky se dají tedy upravovat přímo v editoru Markdown na Githubu.

Stránky nápovědy se nachází ve složce `client/pages/` 

![pages](/public/images/readme/pages.png?raw=true)

Po vybrání určitého souboru stačí kliknout na jeho editaci.

![editace](/public/images/readme/editPage.png?raw=true)

Editor se skládá ze dvou panelů. V levém panelu můžeme upravovat text Markdown. V pravém panelu se vykreslují HTML změny.

![editor](/public/images/readme/editor.png?raw=true)

Samotný text, který lze měnit se nachází mezi prvním a posledním řádkem. První a poslední řádek je zde pro správnou funkci webových stránek (vknihovne.mzk.cz).

    {{#template name='jakTisknout.en'}} <- neměnit prosím tento řádek
    
    # Zde si napíšu libovolný nadpis
    Takto se píše text ve formátu Markdown
     
    {{/template}} <- neměnit prosím tento řádek
    
Změny se ukládají ve formuláři dole pod editorem. Je nutné vyplnit název změny. Změny se uloží tlačítem `Commit`
    
![editor](/public/images/readme/commit.png?raw=true)

Změny v textech se projeví jen zde v repozitáři na Githubu. Změny se neprojeví na webu [vknihovne.mzk.cz](vknihovne.mzk.cz)

Změněné texty z tohoto repozitáře je potom nutné nahrát na web [vknihovne.mzk.cz](vknihovne.mzk.cz)  
    





# Docker 
$ docker build -t moravianlibrary/rozcestnik .
$ docker push moravianlibrary/rozcestnik

