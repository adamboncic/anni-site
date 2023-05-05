import cloudinary from "cloudinary-core";

export default {
  data() {
    return {
      cl: null,
    };
  },
  methods: {
    initializeCloudinary() {
      this.cl = new cloudinary.Cloudinary({ cloud_name: "donw61g6t" });
      this.cl.responsive();
    },
  },
  mounted() {
    if (typeof cloudinary === "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.11.4/cloudinary-core-shrinkwrap.min.js";
      script.onload = this.initializeCloudinary;
      document.head.appendChild(script);
    } else {
      this.initializeCloudinary();
    }
  },
};