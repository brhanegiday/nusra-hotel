const urlBuilder = (src: string) => {
  const fullUrl = process.env.NEXT_PUBLIC_STRAPI_URL + src;
  return fullUrl;
};

export default urlBuilder;
