"use client"
import Section from './Section'
import SectionHeader from '../layout/Texts/SectionHeader'
import SectionDescription from '../layout/Texts/SectionDescription'
import Carousel from '../Carousel'

const TestimonialSection = () => {
  return (
    <Section className="flex flex-col gap-10 text-start justify-center py-16">
      <div className='flex flex-col gap-2'>
        <SectionHeader text="Lidé o mně říkají" className="justify-start" />
        <SectionDescription text="(nebo si to aspoň myslím)" />
      </div>
      <div className='flex justify-center'>
        <Carousel
          items={[
            { title: 'Barrack Obama', description: 'Nebýt jeho, nikdy bych se nestal prezidentem', id: 1 },
            { title: 'Buddha', description: 'Je to hroznej frajer', id: 2 },
            { title: 'Barney Stinson', description: 'Lepší wingman jak Ted', id: 3 },
            { title: 'Teal\'c', description: 'V skutku', id: 4 }
          ]}
          baseWidth={700}
          autoplayDelay={5000}
          loop
          autoplay
          pauseOnHover
        />
      </div>

    </Section>
  )
}

export default TestimonialSection