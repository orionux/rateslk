import React from 'react'

interface SectionHeaderProps {
    title: string;
  }

const FooterTitle: React.FC<SectionHeaderProps> = ({ title }) =>  {
  return (
    <h5>
      <hr />
      {title}
      <hr />
    </h5>
  )
}

export default FooterTitle