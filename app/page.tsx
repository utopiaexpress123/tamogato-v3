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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Home() {
  return (
    <main className="py-6 md:py-12 md:w-1/2 mx-auto min-h-screen items-center justify-between "> 
      <div className="">
        <Tabs defaultValue="havi" className="">
          <TabsList className="border border-stone-200 bg-stone-700 w-full h-12 rounded-2xl shadow-lg">
            <TabsTrigger value="eves">Éves támogatói csomagok</TabsTrigger>
            <TabsTrigger value="havi">Havi támogatások</TabsTrigger>
          </TabsList>

          <TabsContent value="eves">
            <Card className="bg-stone-100 shadow-2xl rounded-2xl">
                  <CardContent className="py-4 px-4">

                    <Accordion type="single" collapsible className="mb-6 bg-transparent shadow-md hover:shadow-lg rounded-2xl p-2">
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
                                <TableCell className="text-left text-lg">Magyar Állatartók Nemzetközi Szövetsége</TableCell>
                                <TableCell className="text-right w-40">
                                  <span>15.000 Huf</span><Button variant="outline" size="sm" className="ml-2"><OkIcon/></Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0 mb-0">

                          <ToggleGroup type="single" className="border shadow-lg bg-stone-700 rounded-xl text-stone-300">
                            <ToggleGroupItem value="a">5000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="b">10000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="c" data-state="on">15000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="d">20000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="e">25000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                          </ToggleGroup>

                        </AccordionContent> 
                      </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible className="mb-6 bg-transparent shadow-md hover:shadow-lg rounded-2xl p-2">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="bg-transparent">
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">
                                  <Avatar>
                                    <AvatarImage src="/money.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                </TableCell>
                                <TableCell className="text-left text-lg">Nemzeti Lótartók a Családokért Alapítvány</TableCell>
                                <TableCell className="text-right w-40">
                                  <span>10.000 Huf</span><Button variant="outline" size="sm" className="ml-2"><OkIcon/></Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0 mb-0">

                          <ToggleGroup type="single" className="border shadow-lg bg-stone-700 rounded-xl text-stone-300">
                            <ToggleGroupItem value="a">5000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="b" data-state="on">10000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="c">15000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="d">20000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                            <ToggleGroupItem value="e">25000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                          </ToggleGroup>

                        </AccordionContent> 
                      </AccordionItem>
                    </Accordion>

                  </CardContent>
            </Card> 

            <Dialog>
              <DialogTrigger className="w-full text-center mx-auto">
                <div className="mt-6 text-center mx-auto w-14 h-14 rounded-full shadow-lg "><PlusIcon/></div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <ScrollArea className="h-[390px] w-[420px] rounded-md border p-4">
                    Jokester began sneaking into the castle in the middle of the night and leaving
                    jokes all over the place: under the king's pillow, in his soup, even in the
                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                    then, one day, the people of the kingdom discovered that the jokes left by
                    Jokester were so funny that they couldn't help but laugh. And once they
                    started laughing, they couldn't stop.
                    <br/>
                    Jokester began sneaking into the castle in the middle of the night and leaving
                    jokes all over the place: under the king's pillow, in his soup, even in the
                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                    then, one day, the people of the kingdom discovered that the jokes left by
                    Jokester were so funny that they couldn't help but laugh. And once they
                    started laughing, they couldn't stop.
                    <br/>
                    Jokester began sneaking into the castle in the middle of the night and leaving
                    jokes all over the place: under the king's pillow, in his soup, even in the
                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                    then, one day, the people of the kingdom discovered that the jokes left by
                    Jokester were so funny that they couldn't help but laugh. And once they
                    started laughing, they couldn't stop.
                    <br/>
                    Jokester began sneaking into the castle in the middle of the night and leaving
                    jokes all over the place: under the king's pillow, in his soup, even in the
                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                    then, one day, the people of the kingdom discovered that the jokes left by
                    Jokester were so funny that they couldn't help but laugh. And once they
                    started laughing, they couldn't stop.
                    </ScrollArea>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            
          </TabsContent>

          <TabsContent value="havi">
            <Card className="bg-stone-100 shadow-2xl rounded-2xl">
                    <CardHeader>
                      <CardDescription className="text-xs text-stone-400">Havi támogatói kereted</CardDescription>
                      <CardTitle className="text-6xl font-extrabold pb-2">10.000<span className="text-xl ml-1 font-normal text-stone-400">Huf</span></CardTitle>
                        <Slider defaultValue={[25]} max={100} step={4} />
                      <div className="pt-2 flex justify-between text-xs text-center text-stone-400">
                        <div className="">500d0</div>
                        <div className="">10000</div>
                        <div className="">15000</div>
                        <div className="">20000</div>
                        <div className="">25000</div>
                      </div>
                    </CardHeader>
                    <CardContent>

                      <Accordion type="single" collapsible className="mb-6 bg-transparent shadow-md hover:shadow-lg rounded-2xl p-2">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="bg-transparent">
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell className="font-medium">
                                    <Avatar>
                                      <AvatarImage src="https://i.pinimg.com/564x/e3/cb/4b/e3cb4b86a3c2c182bbcb8c98be68f092.jpg" />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                  </TableCell>
                                  <TableCell className="text-left">Magyar Állatartók Nemzetközi Szövetsége</TableCell>
                                  <TableCell className="text-right w-24">10000 huf</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </AccordionTrigger>
                          <AccordionContent>

                            <ToggleGroup type="single" className="border shadow-lg bg-stone-800 p-2 rounded-lg text-stone-300 mt-2">
                              <ToggleGroupItem value="a">5000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
                              <ToggleGroupItem value="b" data-state="on">10000 <span className="text-xs ml-1 text-stone-600">Huf</span></ToggleGroupItem>
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

                      <Accordion type="single" collapsible className="mb-6 bg-transparent shadow-md hover:shadow-lg rounded-2xl p-2">
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
          </TabsContent>

        </Tabs>
      </div>
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


function OkIcon() {
  return ( 
<svg className="h-4 w-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

  )
}
