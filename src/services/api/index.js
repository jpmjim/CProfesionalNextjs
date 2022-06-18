const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;

// Reto de la Clase
// const endpoints = {
//   auth: {
//     login: `${API}/api/${VERSION}/auth/login`,
//     profile: `${API}/api/${VERSION}/auth/profile`,
//   },
//   products: {
//     getAllProducts: `${API}/api/${VERSION}/products`,
//     getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
//   },
//   users: {
//     getAllUsers: `${API}/api/${VERSION}/users`,
//     userIsAvailable: `${API}/api/${VERSION}/users/is-available`,
//   },
//   categories: {
//     getAllCategories: `${API}/api/${VERSION}/categories`,
//     getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
//     getCategoryWithProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
//   },
//   files: {
//     upload: `${API}/api/${VERSION}/files/upload`,
//     getFile: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
//   },
// };
