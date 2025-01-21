import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "../config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Pengaduan = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto space-y-6 md:px-4 px-6">
        <div>
          <h2>
            Selamat datang di halaman Call-Center Gerinda Humbang Hasundutan
          </h2>
        </div>
        <div className="text-justify space-y-4">
          <p>
            Kami di Partai Gerindra selalu berkomitmen untuk mendengarkan dan
            merespons aspirasi serta pengaduan dari masyarakat dengan serius dan
            cepat. Melalui kanal pengaduan ini, kami memberikan ruang bagi Anda
            untuk menyampaikan berbagai keluhan, kritik, maupun saran yang dapat
            membantu kami untuk terus memperbaiki kualitas pelayanan dan
            program-program kami di daerah ini. Kami di Partai Gerindra selalu
            berkomitmen untuk mendengarkan dan merespons aspirasi serta
            pengaduan dari masyarakat dengan serius dan cepat. Melalui kanal
            pengaduan ini, kami memberikan ruang bagi Anda untuk menyampaikan
            berbagai keluhan, kritik, maupun saran yang dapat membantu kami
            untuk terus memperbaiki kualitas pelayanan dan program-program kami
            di daerah ini.
          </p>
          <p>
            Setiap pengaduan yang Anda sampaikan akan ditangani oleh tim kami
            dengan penuh perhatian dan segera mencari solusi terbaik. Kami
            percaya, kolaborasi antara partai dan masyarakat adalah kunci untuk
            menciptakan perubahan yang lebih baik bagi Kabupaten Humbang
            Hasundutan. Jangan ragu untuk menghubungi kami melalui berbagai
            saluran yang tersedia di bawah ini, karena setiap suara Anda sangat
            berarti bagi kami!
          </p>
        </div>
        <div>
          <form className="p-4 bg-muted">
            <div className="text-center">
              <h2>Formulir Pengaduan</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Judul pengaduan</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Jenis Pengaduan</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Isi Pengaduan</Label>
                <Textarea
                  maxLength="300"
                  rows="5"
                  cols="6"
                  placeholder="Tuliskan isi pengaduan Anda di sini..."
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 resize-none"
                />
              </div>
              <Button className="bg-accent rounded-none w-full">Submit</Button>
            </div>
          </form>
        </div>
        <div>
          <div className="text-center">
            <h2>FAQ</h2>
          </div>
          <Accordion type="multiple" collapsible>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-sm md:text-[16px] text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {Array.isArray(item.answer) ? (
                    <ul className="space-y-3">
                      {item.answer.map((point, idx) => (
                        <li key={idx}>- {point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Pengaduan;
