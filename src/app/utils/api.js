export async function fetchArticles() {
  try {
    const res = await fetch('https://theroleplayerserver-vvq2fxsxjq-ue.a.run.app/get-articles', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

const authors = [
  {
    "id": 1,
    "name": "Arav Arora",
    "intro": "Arav Arora is a second-year computer science student from Georgia Tech. He enjoys watching the Boston Celtics.",
    "linkedin": "https://www.linkedin.com/in/arav-arora-5b5b1228b/",
    "github": "https://github.com/AravArora05",
    "image": "https://media.licdn.com/dms/image/D4D03AQFBdNKEWhHdiw/profile-displayphoto-shrink_400_400/0/1694206752071?e=1722470400&v=beta&t=1MGRwgywR1P0DEpVum0fVFiWL_tri1u8cbIvxNmtpz8"
  },
  {
    "id": 2,
    "name": "Moksh Shah",
    "intro": "Moksh Shah is a second-year computer science student at Georgia Tech! He loves Bayern Munich and FC Barcelona.",
    "linkedin": "https://www.linkedin.com/in/moksh-shah/",
    "github": "https://github.com/mnshah0101",
    "image": "https://media.licdn.com/dms/image/D4E03AQFGNAEy8FmTew/profile-displayphoto-shrink_200_200/0/1684209357812?e=2147483647&v=beta&t=XCN_QgsuS_au94p5FeWkRPzRjwsmjp1H2S739ZgbeS4"
  },
  {
    "id": 3,
    "name": "Viswa Subramaniam",
    "intro": "Viswa Subramaniam attends UVA! He's into the NBA, and he loves supporting the Baltimore Ravens.",
    "linkedin": "https://www.linkedin.com/in/viswa-subramanian/",
    "github": "https://github.com/mnshah0101",
    "image": "https://media.licdn.com/dms/image/D4E03AQGGLu8gVNrbdg/profile-displayphoto-shrink_400_400/0/1709001387355?e=1722470400&v=beta&t=SHlYe9d67RmS8QVyURvPP86hRCaQTQjIGKJ2RU488es"
  }
];

export async function fetchAuthors() {
  try {
    
    return authors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}
