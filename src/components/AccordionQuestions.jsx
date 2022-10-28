import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { items } from '../data/data';
export const AccordionQuestions = () => {
  return (
    <Accordion className='questions-accordion' allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading >
                <AccordionItemButton >
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
