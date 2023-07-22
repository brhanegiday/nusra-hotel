const urlBuilder = (src: string) => {
  const fullUrl = process.env.NEXT_PUBLIC_STRAPI_URL + src;
  return src;
};

export default urlBuilder;
