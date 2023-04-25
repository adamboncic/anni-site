<template>
  <div class="contact">
    <div class="row contact-grid">
      <div class="col-sm-6">
        <div class="contact-block">
          <span class="contact-header">Management</span>
          <span>Heidi Rotbart</span>
          <a class="contact-email" target="_blank" href="mailto:rotbartmgt@gmail.com">
            rotbartmgt@gmail.com
          </a>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="contact-block ">
          <span class="contact-header">Commerical</span>
          <span>Magdalena Ping</span>
          <a class="contact-email" target="_blank" href="mailto:magdalena@magdalenatalent.com">
            magdalena@magdalenatalent.com
          </a>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="contact-block">
          <span class="contact-header">Personal</span>
          <a class="contact-email" target="_blank" href="mailto:annikaechavez@gmail.com">
            annikaechavez@gmail.com
          </a>
          <div id="socials">
            <a href="https://www.instagram.com/annikaechavez/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.imdb.com/name/nm10743915/" target="_blank"><i class="fab fa-imdb"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
}

.contact a {
  color: #000;
}

.contact-header {
  font-weight: bold;
  padding-bottom: 1rem;
  text-decoration: underline;
  text-transform: uppercase;
}

.contact-block {
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4rem;
  word-break: break-word;
  text-transform: none;
}

.contact-email {
  font-weight: bold;
  text-decoration: none;
}

.contact-info > a {
  color: rgba(0,0,0,.7);
  display: inline-block;
  text-decoration: none;
}

.contact-info > a:hover {
  color: rgba(0,0,0,.9);
}

#socials {
    padding-top:  2.5em;
}

#socials a {
  font-size: 25px;
  padding: 10px 5px;
  color: #343434;
}

#socials i:hover {
  opacity: .7;
}

@media screen and (max-width: 576px) {
  .contact-grid {
    margin: 0 auto;
  }
}
</style>