import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function Home() {
  return (
    <main className="py-6 md:py-12 md:w-1/2 mx-auto min-h-screen items-center justify-between "> 

        <Card className="bg-stone-100 shadow-2xl rounded-2xl">
              <CardHeader>
                <CardDescription className="text-sm text-stone-500">Havi támogatói kereted</CardDescription>
                <CardTitle className="text-5xl font-extrabold pb-2">10.000<span className="text-xl ml-1 font-normal text-stone-300">Huf</span></CardTitle>
                  <Slider defaultValue={[25]} max={100} step={4} />
                <div className="pt-2 flex justify-between text-xs text-center text-stone-300">
                  <div className="">5000</div>
                  <div className="">10000</div>
                  <div className="">15000</div>
                  <div className="">20000</div>
                  <div className="">25000</div>
                </div>
              </CardHeader>
              <CardContent>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-transparent">
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </TableCell>
                            <TableCell className="text-left">Webfejlesztők Pestszentlőrinci Elmeotthona</TableCell>
                            <TableCell className="text-right w-24">5000 huf</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </AccordionTrigger>
                    <AccordionContent>

                      <ToggleGroup type="single" className="border shadow-lg bg-stone-800 p-2 rounded-lg text-stone-300 mt-2">
                        <ToggleGroupItem value="a" data-state="on">5000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="b">10000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="c">15000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="d">20000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="e">25000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                      </ToggleGroup>

                      <Table>
                        <TableHeader className="text-xs">
                          <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">5000 Huf</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">5000 Huf</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                    </AccordionContent> 
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="">
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </TableCell>
                            <TableCell className="text-left">Webfejlesztők Pestszentlőrinci Elmeotthona</TableCell>
                            <TableCell className="text-right w-32">10.000 huf</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </AccordionTrigger>
                    <AccordionContent>

                      <ToggleGroup type="single" className="bg-stone-800 p-2 rounded-lg text-stone-300">
                        <ToggleGroupItem value="a" data-state="on">5000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="b">10000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="c">15000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="d">20000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                        <ToggleGroupItem value="e">25000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                      </ToggleGroup>

                      <Table>
                        <TableHeader className="text-xs">
                          <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">5000 Huf</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">5000 Huf</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                    </AccordionContent> 
                  </AccordionItem>
                </Accordion>

              </CardContent>
              <CardFooter>
                <div className="text-center mx-auto w-14 h-14 rounded-full shadow-lg "><PlusIcon/></div>
              </CardFooter>

        </Card> 

    </main>
  );
}


function PlusIcon() {
  return ( 
<svg className="p-0 m-0 text-stone-800 hover:text-stone-600 w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>
 
  )
}
