const postList = [
  {
    checkbox: "checkbox",
    no: 1,
    witer: "강자자",
    title: "저희 집 주인 땡이를 소개합니다!",
    content: "첫번째 게시글 내용입니다.",
    property:"갤러리",
    createDate: "2020-10-25",
  },
  {
    checkbox: "checkbox",
    no: 2,
    witer: "동동",
    title: "가다랑어 츄르 나눔 해요!",
    content: "두번째 게시글 내용입니다.",
    property:"나눔분양",
    createDate: "2020-11-25",
  },

];

const getPostByNo = (no) => {
  const array = postList.filter((x) => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { postList, getPostByNo };
