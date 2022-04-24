export const projects = [
  {
    title: "데이터 기부 플랫폼",
    description:
      "마지막 팀 프로젝트로 진행했습니다. 팀명은 Triple Donate였으며, decentralization, data, donation 각각의 의미를 순서대로 가지는 탈 중앙화 데이터 기부 플랫폼입니다. 데이터 기반의 연구를 하는 기관, 단체, 학생들은 triple donate를 통해 양질의 데이터를 얻고, 데이터를 기부하는 유저는 triple donate를 통해 자신의 어떤 개인 데이터가 어떤 곳에서 사용되는지 정확히 알 수 있습니다.",
    image: "/images/post_register.gif",
    tags: ["React", "Node.js", "Express", "Mongo", "solidity", "caver-js"],
    source:
      "https://codestates.notion.site/5-3Donate-8b5d560b8ed240648ef46a6d9f361405",
    visit: "https://github.com/codestates/Triple-Donate",
    id: 0,
  },
  {
    title: "Blockchain Community",
    description:
      "두 번째 팀 프로젝트는 'Web2.0 Blockchain Community'를 진행했습니다. 커뮤니티 회원가입, Posting 등의 활동을 하면 ERC-20토큰을 지급해줍니다. 지급받은 ERC-20토큰으로 ERC-721 NFT 구매 가능하게 하는 프로젝트였습니다. UI에 대한 부분은 대부분 진행되었지만 직접적으로 토큰을 제공해주고 NFT를 구매하는 등의 기능은 구현하지 못해 아쉬움이 많이 남는 프로젝트였습니다.",
    image: "/images/blockchain-community.png",
    tags: ["React", "Node.js", "Express", "MySql", "solidity"],
    source:
      "https://velog.io/@tls980824/Clone-Coding-Web2.0-Blockchain-Community",
    visit: "https://github.com/djshinnn/beb-02-second-CWC",
    id: 1,
  },
  {
    title: "Opensea Clone Coding",
    description:
      "첫 번째 팀 프로젝트로 'Opensea Clone Coding'을 진행했습니다. Opensea는 세계 최고의 NFT 거래소로 ERC721, ERC1155의 NFT를 판매하는 사이트입니다. 최대한 비슷하게 구현하고 싶었지만 NFT 생성은 구현했지만, NFT 구매와 판매 등록까지는 구현을 못해서 아쉬웠습니다. 이 프로젝트를 통해 처음 협업해보았으며, git 사용에 대해 많이 배웠습니다.",
    image: "/images/opensea-clone-coding.png",
    tags: ["React", "Node.js", "Express", "Mysql", "solidity", "Web3-js"],
    source: "https://velog.io/@tls980824/Clone-coding-Opensea",
    visit: "https://github.com/djshinnn/beb_02_JMJ",
    id: 2,
  },
  // {
  //   title: 'E-Commerce',
  //   description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  //   image: '/images/2.png',
  //   tags: ['React', 'JavaScript'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 1,
  // },
  // {
  //   title: 'WebRTC App',
  //   description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  //     image: '/images/3.jpg',
  //     tags: ['React', 'WebRTC'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 2,
  // },
  // {
  //   title: 'Unichat',
  //   description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: '/images/4.jpg',
  //   tags: ['React', 'ChatEngine', 'Firebase'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 3,
  // },
];

export const practice = [
  {
    title: "이더리움 전송 사이트",
    description:
      "rinkeby 테스트 네트워크에서 진행한 이더리움 전송 사이트입니다. Web3지갑 구현을 하여 테스트 이더리움 양, 보낼 주소를 입력해서 Confirm 버튼을 누르면 메타마스크 지갑에서 트랜잭션 승인 창이 나옵니다. 승인을 누르면 이더리움 블록에 트랜잭션이 올라갈 때 까지 로딩창이 활성화 됩니다. 처리가 완료되면 아래 전송 내역이 나오고 트랜잭션 기록을 'View on Etherscan' 항목을 클릭하며 볼 수 있습니다.\n\n본 사이트는 youtube 강의를 참고했습니다.\nhttps://www.youtube.com/watch?v=xXxjRzdYIss&list=LL&index=3 ",
    image: "/images/swap-site.gif",
    tags: ["Next.js", "Node.js", "Sanity", "solidity", "hardhat"],
    source: "https://uniswap-blockchain-youtube-djshinnn.vercel.app/",
    visit: "https://github.com/djshinnn/youtube-swap-clone",
    id: 0,
  },
  {
    title: "감정일기장",
    description:
      "리액트로 만든 감정일기장입니다. 새 일기쓰기 항목을 클릭하면 감정과 날짜를 선택하고 일기내용을 쓸 수 있습니다. 일기는 수정과 삭제 모두 가능합니다. 일기 목록을 클릭하면 상세 페이지로 넘어가며 상세 페이지에는 감정 표현을 큰 이미지로 볼 수 있고 일기 내용이 적혀져 있습니다. 일기는 필터를 통해 '최신순', '오래된 순' 정렬과 '전부 다', '좋은 감정만', '나쁜 감정만'을 보여줄 수 있습니다. 일기는 개월마다 한 페이지로 정렬했습니다.\n\n본 사이트는 udemy 강의를 참고했습니다.\nhttps://www.udemy.com/course/\nwinterlood-react-basic/ ",
    image: "/images/emotion-diary.gif",
    tags: ["React", "localstorage"],
    source: "https://myemotion-diary.web.app",
    visit: "https://github.com/djshinnn/emotion-diary",
    id: 1,
  },
  {
    title: "NFT 민팅 사이트",
    description:
      "Ganache 테스트 네트워크에서 진행한 NFT 민팅 사이트입니다. Open Zeppelin의 ERC-721코드를 리팩토링 해보았으며, NFT전송 및 Truffle 콘솔 테스트를 통해 compile 및 deploy 진행했습니다. 직접 컨트랙트를 작성해보면서 ERC721의 각 함수가 갖는 의미를 공부했습니다. \n\n본 사이트는 youtube 강의를 참고했습니다.\nhttps://www.udemy.com/course/the-complete-nft-web-developer-course-zero-to-professional/ ",
    image: "/images/nft-marketplace.gif",
    tags: ["Next.js", "Node.js", "Sanity", "solidity", "hardhat"],
    source:
      "https://velog.io/@tls980824/Truffle%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-ERC-721%EA%B0%9C%EB%B0%9C",
    visit: "https://github.com/djshinnn/ERC721-NFT",
    id: 2,
  },
];

export const TimeLineData = [
  {
    year: 2018,
    text: "기계공고 졸업 후 의료기기 회사에서 기계 가공직 산업기능요원으로 근무",
  },
  {
    year: 2019,
    text: "의료기기 회사에서\n디스플레이 회사로 이직,\n품질관리로 직종 변경",
  },
  {
    year: 2020,
    text: "직장생활 4년차,\n20년 9월 퇴사 후 진로 탐색\nIT진로 관심 시작",
  },
  {
    year: 2021,
    text: "정보보안 교육 과정 후 보안관제 회사 취직, 블록체인으로 직종변경 위해 코드스테이츠 교육 수강",
  },
  { year: 2022, text: "코드스테이츠 블록체인\n실무 과정 교육 수강 완료" },
];
