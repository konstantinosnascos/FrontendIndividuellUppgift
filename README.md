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


### Efter tagit  bort simulateHeavyWork()
- Lighthouse Mobile
  75 - Performance
  78 - Accessibility
  100 - Best Practices
  91 - SEO
-
- Lighthouse Desktop
- 76 - Performance
  78 - Accessibility
  100 - Best Practices
  91 - SEO

Viss skillnad på mobil