- Jag kommer börja med att dokumentera problem jag ser, och därefter rätta till dom.
 
- När jag startar sidan så är det första jag ser att texten är svårläst(jag har flera typer av färgblindhet),
vilket betyder att css har minst ett fel att titta på.
- När jag trycker på tab hoppar den inte mellan knapparna, så antagligen är där samma problem som med githubrepot vi skulle utvärdera efter boiler room igår.
- Pris i kr och text på engelska(och lorem ipsum). vet inte om det är en fråga om användarvänlighet, men ska titta mer på det sen.
- Där finns ingen alt text på bilderna i index.html -fixat
- Stora bildfiler ska finnas i olika storlek för att inte använda för mycket data från mobilanvändare och starta snabbare.
- det saknas lang-attribut i <html>
- Ingen main, nav, header, footer i index.html
- h1 används flera gånger
- add-to-cart är inte en button(går att trycka på, men ändå fel)
- subscribe är inte heller en button(lurigt att döpa klassen till primary-button)
- <script></script> ligger i head istället för slutet. vet inte om det är fel, men jag får kolla på det
- utgår från att det kan förbättras med lazy-loading
- 



### Innan ändringar
- Lighthouse Mobile
  62 - Performance
  78 - Accessibility
  100 - Best Practices
  91 - SEO
- 
- Lighthouse Desktop
- 74 - Performance
  78 - Accessibility
  100 - Best Practices
  91 - SEO


### Efter Index.html ändringar
- Lighthouse Mobile
  57 - Performance
  96 - Accessibility
  100 - Best Practices
  100 - SEO
-
- Lighthouse Desktop
- 73 - Performance
  96 - Accessibility
  100 - Best Practices
  100 - SEO

Accessibility är nära 100, jag gissar att jag kan få det till 100 om jag lusläser css-filen
Performance har droppat på mobil, osäker på när och varför(gjorde bara tester på vägen med desktop i lighthouse), men kommer vänta med det till senare.
Jag kan navigera med tangenter märkte jag när jag testade igen, men jag ser inte vad jag navigerar till, antagligen tryckte jag inte tab tillräckligt många gånger första gången jag testade. Kan då va så att navigering med tab fungerat från start. Oklart...
SEO har gått upp till 100, jag är osäker på varför, för jag trodde att alla ändringar jag gjorde va kopplade till accessibility. Kan va så enkelt som att jag tog bort ett par divs, la till main, ändra till en h1 gjorde skillnaden. Kankse va aria-label, men jag hade för mig att det va för navigering för blinda. Kanske minns fel.


### Efter styles.css ändringar
- Lighthouse Mobile
  57(75 utan simulateheavywork) - Performance
  100 - Accessibility
  100 - Best Practices
  100 - SEO
-
- Lighthouse Desktop
- 73(76 utan simulateheavywork) - Performance
  100 - Accessibility
  100 - Best Practices
  100 - SEO
Fick upp accessibility i lighthouse till 100, det hade ingen påverkan på performance, men det hade varit konstigt om det hade det. outline: none va nytt för mig, men känns inte viktigt att kunna. Jag fixade till en snabb sak i script som inte matchade vad jag hade i index.
Nu måste jag fixa performance. Minst 40% bättre, men jag tror det är baserat på vad jag hade i start, så jag får backa, köra om och se vad jag får. 
- Just nu får jag:
  Largest Contentful Paint
  42.8 s

Jag har läst igenom instruktionerna igen. Glömmer bort att hänvisa till dom titt som tätt. Del 1 är gjord korrekt.
Del 2 är tillgänglighetskrav klara, navigering med tangenter fungerar(kanske hade kunnat ändra så det blev ännu tydligare var man är), bilder har alt-attribut, men är inte komprimerade än. Kontrast är fixad. aria attrbut där det ska vara är fixat.


-Komprimera bilder
bakgrundsbilden kommer sättas till 1600 bredd(tänker desktop)
korten är 300 pixlar breda, så det blir en rimlig storlek också tänker jag.
kommer göra det på https://squoosh.app/editor och om jag minns rätt så görs höjd då automatiskt

efter komprimering så kördes lighthouse igen:
detta är mobile:
- 95 - Performance
  100 - Accessibility
  100 - Best Practices
  100 - SEO
  detta är desktop:
- 100 - Performance
  100 - Accessibility
  100 - Best Practices
  100 - SEO