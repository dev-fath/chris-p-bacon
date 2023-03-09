import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      페이지를 찾을 수 없습니다
      <button>
        <Link href="/">돌아가기</Link>
      </button>
    </div>
  );
};

export default NotFound;
