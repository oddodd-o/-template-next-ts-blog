// 감싸는 역할 및 스타일링을 위한 컴포넌트
import React from 'react'
import classNames from 'classnames';

interface ContainerProps {
  // 어떤 종류의 유효한 자식이든 받을 수 있음
  children: React.ReactNode;
  className?: string;
}

// grid
const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={
      classNames('max-w-[1340px] px-5 md:px-8 mx-auto', className)
    }>
      {children}
    </div>
  )
}

// 사이트 전체 감싸는 역할
export const Wrap = ({children}: ContainerProps) => {
  return (
    <div>{children}</div>
  )
}

// 섹션 감싸는 역할
export const Section = ({children}: ContainerProps) => {
  return (
    <section>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Container