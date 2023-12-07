const paths = {
  homePath() {
    return "/";
  },
  topicShowPage(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreatePath(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShowPath(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
