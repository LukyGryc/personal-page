import React from 'react'
import Section from './Section'
import SectionHeader from '../layout/Texts/SectionHeader'
import SectionDescription from '../layout/Texts/SectionDescription'

const TestimonialSection = () => {
  return (
    <Section className="flex flex-col gap-10 text-start justify-center py-16">
        <SectionHeader text="Lidé o mně říkaji" className="justify-start" />
        <SectionDescription text="(nebo si to aspoň myslím)" />
    </Section>
  )
}

export default TestimonialSection