<script>
import FooterCredits from "./partials/_FooterCredits.vue";

export default {
  data() {
    return {
      footerInfos: [
        {
          title: "Scopri di più",
          subtitles: [
            {
              text: "Chi siamo",
              link: "#",
            },
            {
              text: "Ristoranti",
              link: "#",
            },
            {
              text: "Lavora con noi",
              link: "#",
            },
            {
              text: "Diventa nostro partner",
              link: "#",
            },
          ],
        },
        {
          title: "Note legali",
          subtitles: [
            {
              text: "Termini e condizioni",
              link: "#",
            },
            {
              text: "Informativa sulla privacy",
              link: "#",
            },
            {
              text: "Cookies",
              link: "#",
            },
          ],
        },
        {
          title: "Aiuto",
          subtitles: [
            {
              text: "Contatti",
              link: "#",
            },
            {
              text: "FAQ",
              link: "#",
            },
          ],
        },
        {
          title: "Portaci con te",
          subtitles: [
            {
              image: "/images/download_templates/download_app_store.png",
              link: "#",
            },
            {
              image: "/images/download_templates/download_google_play.png",
              link: "#",
            },
          ],
        },
      ],
    };
  },

  components: {
    FooterCredits,
  },
};
</script>

<template>
  <div class="footer-content p-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 gy-lg-0">
        <div v-for="info in footerInfos" class="col">
          <div class="footer-detail-content h-100 p-4">
            <h5>{{ info.title }}</h5>
            <ul class="list-group" v-for="subtitle in info.subtitles">
              <li class="my-1">
                <a v-if="subtitle.text" class="text-reset text-decoration-none" :href="subtitle.link">
                  {{ subtitle.text }}
                </a>
                <a v-else class="text-reset text-decoration-none" :href="subtitle.link">
                  <img :src="subtitle.image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterCredits />
</template>

<style lang="scss" scoped>
.list-group>li:hover {
  text-decoration: underline;
}

.footer-content {
  background-color: #e2e6e9;

  .footer-detail-content {
    background-color: white;
  }

  ul {
    li {
      img {
        height: 40px;
      }
    }
  }
}
</style>
