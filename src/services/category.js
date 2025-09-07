const categorySets = {
  default: [
    { label: 'Q&A', value: 'qna' },
    { label: '커뮤니티', value: 'community' },
    { label: '공지사항', value: 'notice' },
    { label: '강의', value: 'lecture' },
  ],
  admin: [
    { label: '유저관리', value: 'users' },
    { label: '신고내역', value: 'reports' },
    { label: '사이트 설정', value: 'settings' },
  ],
  etc: [
    { label: 'FAQ', value: 'faq' },
    { label: '문의하기', value: 'contact' },
  ],
};

export function getCategorise(type = 'default') {
  return categorySets[type] || [];
}
