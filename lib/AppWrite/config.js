import { Client, Account, Databases, Storage, Avatars } from "appwrite";
// Exporting The Main Keys  From The .env.local To Connect To Tha Database And Get Info
const ApiKeys = {
  VITE_APPWRITE_PROJECT_ID: "65ae2caa3eb85174c374",
  VITE_APPWRITE_URL: "https://cloud.appwrite.io/v1",
  VITE_APPWRITE_STORAGE_ID: "65c339df4e216fab8a70",
  VITE_APPWRITE_DATABASE_ID: "65aea2ec5ec0db4307f5",
  VITE_APPWRITE_USERS_COLLECTION_ID: "65aea35b8f0420742577",
  VITE_APPWRITE_POSTS_COLLECTION_ID: "65aea32c4bac55d5b58d",
  VITE_APPWRITE_SAVES_COLLECTION_ID: "65aea36f52cd56a61bec",
  VITE_APPWRITE_CHATS_COLLECTION_ID: "65dd7de19391fa0d5239",
  VITE_APPWRITE_MESSAGES_COLLECTION_ID: "65dd774c7a62c33b6dec",
};
export const AppWriteConfig = {
  projectId: ApiKeys.VITE_APPWRITE_PROJECT_ID,
  url: ApiKeys.VITE_APPWRITE_URL,
  databaseId: ApiKeys.VITE_APPWRITE_DATABASE_ID,
  storageId: ApiKeys.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: ApiKeys.VITE_APPWRITE_USERS_COLLECTION_ID,
  postCollectionId: ApiKeys.VITE_APPWRITE_POSTS_COLLECTION_ID,
  savesCollectionId: ApiKeys.VITE_APPWRITE_SAVES_COLLECTION_ID,
  chatCollectionId: ApiKeys.VITE_APPWRITE_CHATS_COLLECTION_ID,
  messageCollectionId: ApiKeys.VITE_APPWRITE_MESSAGES_COLLECTION_ID,
};

// export const AppWriteConfig = {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   url: import.meta.env.VITE_APPWRITE_URL,
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
//   userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
//   postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
//   savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
//   chatCollectionId: import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID,
//   messageCollectionId: import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID,
// };
// exporting the Main Element To Connect To DataBase
export const client = new Client();
client.setProject(AppWriteConfig.projectId);
client.setEndpoint(AppWriteConfig.url);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
