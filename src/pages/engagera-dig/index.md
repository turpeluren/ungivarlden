---
layout: ../../layouts/anmalan.astro
tagline: "Engagera dig"
title: "Bli en del av Ung I Världen"
subtitle: ""
heroImage:
  src: ~/assets/images/the-future-is-equal.png
  alt: Ung i världen introbild
formTitle: " Hitta ditt engagemang hos oss!!!"
formSubtitle: "Välkommen till Ung i världen! Vi är en lokalförening som brinner
  för att ge ungdomar möjlighet att engagera sig i globala utvecklingsfrågor.
  Hos oss kan du vara med och skapa en bättre värld, samtidigt som du får
  chansen att utvecklas och träffa likasinnade. Oavsett om du vill hålla dig
  uppdaterad om våra senaste event och nyheter, eller om du vill ta steget och
  bli volontär i vårt senaste EU-projekt, har vi en plats för dig. "
checkBoxText: Genom att klicka på knappen för anmälan godkänner du vår integritetspolicy och samtycker till behandling av dina personuppgifter i enlighet med GDPR (KAN VI LÄNKA T DENNA TEXT NEDAN ?) 
submitText: Tack för ditt intresse!!
---

<style>
  .clickable {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }

  .message-bubble {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 300px;
    border-radius: 5px;
  }

  .message-bubble p {
    margin: 10px 0;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('integritetspolicy-link');
    const bubble = document.getElementById('message-bubble');

    link.addEventListener('click', (event) => {
      event.stopPropagation();
      const rect = link.getBoundingClientRect();
      bubble.style.top = `${rect.bottom + window.scrollY}px`;
      bubble.style.left = `${rect.left + window.scrollX}px`;
      bubble.style.display = bubble.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
      if (!bubble.contains(event.target) && event.target !== link) {
        bubble.style.display = 'none';
      }
    });
  });
</script>

<div id="message-bubble" class="message-bubble">
  <strong>Integritetspolicy</strong>
  <p><strong>Vilka uppgifter vi samlar in:</strong> Vi samlar in personuppgifter som namn, e-postadress och telefonnummer när du registrerar dig på vår hemsida.</p>
  <p><strong>Hur vi använder dina uppgifter:</strong> Vi använder dina uppgifter för att hantera din registrering och för att kommunicera med dig om våra senaste event och projekt.</p>
  <p><strong>Hur vi skyddar dina uppgifter:</strong> Vi vidtar lämpliga säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, avslöjande eller förstörelse.</p>
  <p><strong>Dina rättigheter:</strong> Du har rätt att begära tillgång till, rättelse av eller radering av dina personuppgifter. Kontakta oss om du har några frågor eller önskar utöva dina rättigheter.</p>
</div>

<!-- I knappen ska det länkas med vår integritetspolicy som står denna text: 
**Integritetspolicy**

**Vilka uppgifter vi samlar in:**
Vi samlar in personuppgifter som namn, e-postadress och telefonnummer när du registrerar dig på vår hemsida.

**Hur vi använder dina uppgifter:**
Vi använder dina uppgifter för att hantera din registrering och för att kommunicera med dig om våra senaste event och projekt.

**Hur vi skyddar dina uppgifter:**
Vi vidtar lämpliga säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, avslöjande eller förstörelse.

**Dina rättigheter:**
Du har rätt att begära tillgång till, rättelse av eller radering av dina personuppgifter. Kontakta oss om du har några frågor eller önskar utöva dina rättigheter. -->
