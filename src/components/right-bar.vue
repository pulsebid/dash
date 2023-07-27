<script>
import { layoutMethods, layoutComputed } from "@/state/helpers";
/**
 * Right sidebar component
 */
export default {
  components: {},
  data() {
    return {
      config: {
        middleware: this.middleware,
        events: ["click"],
      },
    };
  },
  methods: {
    ...layoutMethods,
    middleware(event) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    removeExtraFade() {
      let fade = document.getElementsByClassName('offcanvas-backdrop fade show');
      for (let i = 0; i < fade.length; i++) {
        while (fade.length > 1) {
          fade[i].remove();
        }
      }
    },

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    resizeWindow() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize >= 1025) {
        if (document.documentElement.getAttribute("data-layout") === "vertical") {
          document.documentElement.setAttribute("data-sidebar-size", this.$store.state.layout.sidebarSize);
        }

        if (document.documentElement.getAttribute("data-sidebar-visibility") === "show" && document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
      } else if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("twocolumn-panel");
        if (document.documentElement.getAttribute("data-layout") === "vertical") {
          document.documentElement.setAttribute("data-sidebar-size", "sm");
        }
        if (document.documentElement.getAttribute("data-layout") === "semibox") {
          document.documentElement.setAttribute("data-sidebar-size", "sm");
        }
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      } else if (windowSize <= 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.body.classList.add("twocolumn-panel");
        if (document.documentElement.getAttribute("data-layout") !== "horizontal") {
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      }
    }

  },
  mounted() {
    let backtoTop = document.getElementById("back-to-top");

    if (backtoTop) {
      backtoTop = document.getElementById("back-to-top");
      window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backtoTop.style.display = "block";
        } else {
          backtoTop.style.display = "none";
        }
      };
    }

    var setpreloader = document.getElementById("preloader");
    if (localStorage.getItem('data-preloader') && localStorage.getItem('data-preloader') === 'enable') {
      document.documentElement.setAttribute("data-preloader", "enable");
      if (setpreloader) {
        setTimeout(function () {
          setpreloader.style.opacity = "0";
          setpreloader.style.visibility = "hidden";
        }, 1000);
      }
    } else {
      document.documentElement.setAttribute("data-preloader", "disable");
      if (setpreloader) {
        setpreloader.style.opacity = "0";
        setpreloader.style.visibility = "hidden";
      }
    }

    window.addEventListener("resize", this.resizeWindow);
  },
  computed: {
    ...layoutComputed,
  },
  watch: {
    mode: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-layout-mode", "dark");
              break;
            case "light":
              document.documentElement.setAttribute(
                "data-layout-mode",
                "light"
              );
              break;
          }
        }
      },
    },
    sidebarColor: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-sidebar", "dark");
              break;
            case "light":
              document.documentElement.setAttribute("data-sidebar", "light");
              break;
          }
        }
      },
    },
    preloader: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          localStorage.setItem('data-preloader', newVal);
        }
      },
    },
    sidebarImage: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "img-1":
              document.documentElement.setAttribute("data-sidebar-image", "img-1");
              break;
            case "img-2":
              document.documentElement.setAttribute("data-sidebar-image", "img-2");
              break;
            case "img-3":
              document.documentElement.setAttribute("data-sidebar-image", "img-3");
              break;
            case "img-4":
              document.documentElement.setAttribute("data-sidebar-image", "img-4");
              break;
            case "none":
              document.documentElement.setAttribute("data-sidebar-image", "none");
              break;
          }
        }
      },
    },
    sidebarView: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "detached":
              document.documentElement.setAttribute(
                "data-layout-style",
                "detached"
              );
              break;
            case "default":
              document.documentElement.setAttribute(
                "data-layout-style",
                "default"
              );
              break;
          }
        }
      },
    },
    position: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.documentElement.setAttribute(
                "data-layout-position",
                "fixed"
              );
              break;
            case "scrollable":
              document.documentElement.setAttribute(
                "data-layout-position",
                "scrollable"
              );
              break;
          }
        }
      },
    },
    sidebarSize: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "lg":
              document.documentElement.setAttribute("data-sidebar-size", "lg");
              break;
            case "sm":
              document.documentElement.setAttribute("data-sidebar-size", "sm");
              break;
            case "md":
              document.documentElement.setAttribute("data-sidebar-size", "md");
              break;
            case "sm-hover":
              document.documentElement.setAttribute(
                "data-sidebar-size",
                "sm-hover"
              );
              break;
          }
        }
      },
    },
    topbar: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.documentElement.setAttribute("data-topbar", "light");
              break;
            case "dark":
              document.documentElement.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    layoutWidth: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fluid":
              document.documentElement.setAttribute(
                "data-layout-width",
                "fluid"
              );
              break;
          }
        }
      },
    },
    layoutType: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "vertical":
              document.documentElement.setAttribute("data-layout", "vertical");
              break;
          }
        }
      },
    },
    visibility: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "show":
              document.documentElement.setAttribute("data-sidebar-visibility", "show");
              break;
            case "hidden":
              document.documentElement.setAttribute(
                "data-sidebar-visibility",
                "hidden"
              );
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <div>
    <div id="preloader">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Carregando...</span>
        </div>
      </div>
    </div>

    <b-button variant="danger" @click="topFunction" class="btn-icon" id="back-to-top">
      <i class="ri-arrow-up-line"></i>
    </b-button>
  </div>
</template>
  