import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();

// Mock ContentStore for demonstration
//const ContentStore = {
//  collections: {
//   pages: {
//      all: async () => [
//        { slug: 'page1' },
//        { slug: 'page2' }
//      ]
//    }
//  }
//};

// Add a custom handler for logging the environment variable
//export const GET = (req: Request, res: Response) => {
  // Log the environment variable to check if it's being picked up
//  console.log("KINDE_ISSUER_URL:", process.env.KINDE_ISSUER_URL);

  // Call the handleAuth function after logging
//  return handleAuth()(req, res);
//};

// Define the Params type
//type Params = {
//  slug: string;
//};

// Generate static params
//export async function generateStaticParams(): Promise<Params[]> {
// try {
//    const pages = await ContentStore.collections.pages.all();

//    if (!pages || pages.length === 0) {
//      return [{ slug: 'not-found' }];
 //   }

 //   return pages.map(page => ({
 //     slug: page.slug,
 //   }));
//  } catch (error) {
//    console.error("Error fetching pages:", error);
 //   return [{ slug: 'not-found' }];
//  }
//}
