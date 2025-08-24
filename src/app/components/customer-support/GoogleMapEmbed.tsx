export default function GoogleMapEmbed() {
  return (
    <div className="w-full lg:w-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.372021339119!2d110.4149840742278!3d-7.754378492273452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b6e3b40f3d%3A0x63f46af5e7033bc0!2sJl.%20Kembang%20Baru%20No.10%2C%20Bandara%2C%20Maguwoharjo%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
        width="100%"
        height="380"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        className="rounded-xl"
      />
    </div>
  );
}
