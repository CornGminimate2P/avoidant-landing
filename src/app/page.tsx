import Navbar from "@/components/Navbar";
import Cover from "@/components/Cover";
import TableOfContents from "@/components/TableOfContents";
import Chapter from "@/components/Chapter";
import TheoryBox from "@/components/TheoryBox";
import PullQuote from "@/components/PullQuote";
import ComparisonTable from "@/components/ComparisonTable";
import StepFlow from "@/components/StepFlow";
import DataGrid from "@/components/DataGrid";
import NoteBox from "@/components/NoteBox";
import HighlightBlock from "@/components/HighlightBlock";
import References from "@/components/References";
import {
  Body,
  SectionHeading,
  SubHeading,
  Ref,
  Term,
  Divider,
} from "@/components/Prose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <TableOfContents />

      <div className="max-w-[820px] mx-auto px-10 max-md:px-5">
        {/* ─── CH 1 ─── */}
        <Chapter
          id="ch1"
          num="CHAPTER 01"
          title="ที่มา: ทำไม Bowlby ถึงเริ่มสนใจเรื่องนี้"
        >
          <Body>
            ก่อนที่ Attachment Theory จะเกิดขึ้น โลกจิตวิทยาในช่วงกลางศตวรรษที่
            20 ถูกครอบงำด้วยสองกระแสใหญ่คือ Psychoanalysis
            (ซึ่งมองว่าเด็กผูกพันกับแม่เพราะแม่เป็นแหล่งอาหาร — drive theory)
            และ Behaviorism (ซึ่งอธิบายทุกอย่างด้วยการเสริมแรงและการลงโทษ)
            ทั้งสองสำนักต่างเห็นพ้องกันว่าความผูกพันในวัยเด็กไม่ใช่เรื่องสำคัญในตัวมันเอง
            แต่เป็นแค่ &quot;ผลพลอยได้&quot; จากการตอบสนองความต้องการพื้นฐาน
          </Body>
          <Body>
            Bowlby
            เป็นจิตแพทย์เด็กชาวอังกฤษที่ได้รับการฝึกฝนในประเพณีจิตวิเคราะห์แบบ
            Kleinian ในทศวรรษที่ 1940
            เขาวิเคราะห์เด็กที่ถูกส่งออกจากลอนดอนในช่วง Blitz
            และเด็กที่เติบโตในสถานเลี้ยงเด็กกำพร้า
            สิ่งที่เขาสังเกตเห็นขัดแย้งกับทฤษฎีจิตวิเคราะห์ที่เขาเรียนมา —
            เด็กไม่ได้ผูกพันกับแม่เพราะแม่ให้อาหาร (ตาม Freudian &quot;drive
            reduction&quot;) แต่ผูกพันในแบบที่ลึกกว่าและอิสระกว่านั้น
          </Body>
          <Body>
            ปี 1944 เขาตีพิมพ์งานวิจัยเรื่อง &quot;Forty-Four Juvenile
            Thieves&quot; ซึ่งศึกษาเด็กผู้ชาย 44
            คนที่ถูกส่งเข้าคลินิกเพราะลักขโมย และพบว่าหลายคนมีประวัติการ
            &quot;Affectionless Psychopathy&quot; —
            ไม่มีความสามารถในการสร้างความผูกพันที่มีความหมาย
            และเกือบทุกคนในกลุ่มนี้มีประสบการณ์การแยกจากแม่ในช่วงวัยเด็กอย่างรุนแรง
            <Ref>[1]</Ref>
          </Body>

          <TheoryBox
            label="จุดเปลี่ยนสำคัญ"
            title="Bowlby กับงานของ WHO (1951)"
          >
            <p>
              หนึ่งในแรงผลักดันให้ Bowlby พัฒนาทฤษฎีคือรายงานที่เขาเขียนให้ WHO
              ในปี 1951 เรื่อง <em>Maternal Care and Mental Health</em>{" "}
              ซึ่งรวบรวมหลักฐานจากทั่วโลกว่าเด็กที่ถูกแยกออกจากผู้เลี้ยงดูตั้งแต่เนิ่นๆ
              (เช่น เด็กกำพร้าในสถานสงเคราะห์ หรือเด็กที่อพยพออกจากลอนดอนช่วง
              WWII) มีพัฒนาการทางอารมณ์และสติปัญญาที่ถดถอยอย่างมีนัยสำคัญ
              รายงานนี้เป็นจุดเริ่มต้นของการมองว่า &quot;maternal
              deprivation&quot; เป็นปัญหาสาธารณสุข ไม่ใช่แค่ปัญหาจิตวิทยาบุคคล
            </p>
          </TheoryBox>

          <Body>
            จากนั้น Bowlby หันไปหาศาสตร์อื่น 3
            สาขาที่ทฤษฎีจิตวิเคราะห์แบบเดิมไม่เคยสนใจ นั่นคือ{" "}
            <strong>Ethology</strong> (การศึกษาพฤติกรรมสัตว์ในธรรมชาติ
            โดยเฉพาะงานของ Konrad Lorenz เรื่อง Imprinting),{" "}
            <strong>Control Systems Theory</strong> (ทฤษฎีระบบควบคุมทางวิศวกรรม)
            และ <strong>Information Processing Theory</strong> (จากงานของ George
            Miller) จากสามสาขานี้เขาสร้าง Attachment Theory ขึ้นมาเป็น
            biological theory ของการผูกพันระหว่างมนุษย์
          </Body>

          <TheoryBox
            label="แนวคิดหลักจาก Robertson (1952)"
            title="สามระยะของการตอบสนองต่อการแยกจาก"
          >
            <p>
              James Robertson
              สังเกตเด็กที่ต้องเข้าโรงพยาบาลโดยไม่มีพ่อแม่อยู่ด้วย
              และพบรูปแบบสามระยะ: <strong>Protest</strong> (ร้องไห้ เรียกหา
              ต่อต้านการสัมผัสของคนแปลกหน้า) → <strong>Despair</strong> (เงียบลง
              ดูซึมเศร้า) → <strong>Detachment</strong> (เมื่อแม่กลับมา
              เด็กกลับทำเหมือนไม่รู้จัก)
            </p>
            <p>
              Bowlby ตีความ Detachment phase นี้ว่าเป็นต้นกำเนิดของ Defensive
              Exclusion — ระยะนี้ไม่ใช่ว่าเด็กหายดีแล้ว แต่เป็นการที่ระบบ
              Attachment &quot;ปิดตัวเอง&quot;
              เพื่อรับมือกับความเจ็บปวดที่ทนไม่ได้
            </p>
          </TheoryBox>

          <SectionHeading>
            Timeline: เหตุการณ์สำคัญในประวัติศาสตร์ Attachment Theory
          </SectionHeading>
          <StepFlow
            steps={[
              {
                title: "1951 — Bowlby: WHO Report",
                description:
                  "รายงาน Maternal Care and Mental Health รวบรวมหลักฐานว่าการแยกจากผู้เลี้ยงดูส่งผลเสียรุนแรง",
              },
              {
                title: "1953–55 — Ainsworth: Uganda Study",
                description:
                  'Mary Ainsworth สังเกต infant-mother attachment ในยูกันดา พัฒนา construct "Maternal Sensitivity"',
              },
              {
                title: "1963–67 — Ainsworth: Baltimore Study",
                description:
                  "ศึกษา 26 ครอบครัว พัฒนา SSP พบ 3 รูปแบบ: Secure (B), Avoidant (A), Anxious-Ambivalent (C)",
              },
              {
                title: "1985–86 — Main: AAI + Type D",
                description:
                  "พัฒนา Adult Attachment Interview ค้นพบ Disorganized (D) และการส่งต่อข้ามรุ่น",
              },
              {
                title: "1987 — Hazan & Shaver",
                description:
                  "ต่อยอดสู่ความสัมพันธ์โรแมนติก พบ 3 รูปแบบในผู้ใหญ่ (Secure ~56%, Avoidant ~25%, Anxious ~19%)",
              },
              {
                title: "1991 — Bartholomew & Horowitz",
                description:
                  "โมเดล 4 ช่อง: แบ่ง Avoidant เป็น Dismissive (Self+, Other-) และ Fearful (Self-, Other-)",
              },
              {
                title: "1998 — Brennan, Clark & Shaver: ECR",
                description:
                  "วิเคราะห์ทางสถิติ พบ 2 มิติหลัก: Anxiety และ Avoidance พัฒนา ECR Scale",
              },
            ]}
          />

          <SectionHeading>ทำไม Bowlby ต้องต่อสู้กับกระแสหลัก</SectionHeading>
          <Body>
            สิ่งที่ทำให้ Bowlby แตกต่างจากนักจิตวิเคราะห์ร่วมสมัยคือเขาเสนอว่า{" "}
            <strong>ความผูกพันเป็น Primary Drive</strong> — ไม่ใช่ Secondary
            Drive ที่เกิดจากความต้องการอาหารหรือความพึงพอใจทางเพศอย่างที่ Freud
            เสนอ เด็กไม่ผูกพันกับแม่เพราะแม่ให้อาหาร
            แต่ผูกพันเพราะสมองมนุษย์ถูกออกแบบมาเพื่อสร้างความผูกพันกับผู้เลี้ยงดู
            <Ref>[1]</Ref>
          </Body>
          <Body>
            แนวคิดนี้ถูกปฏิเสธอย่างรุนแรงโดย British Psychoanalytical Society
            ในตอนแรก Melanie Klein วิจารณ์ว่า Bowlby
            ลดทอนความซับซ้อนของจิตใจมนุษย์ลงเป็นแค่ &quot;พฤติกรรมสัตว์&quot;
            แต่ในที่สุดงานของ Bowlby
            ก็พิสูจน์ตัวเองด้วยหลักฐานเชิงประจักษ์ที่สะสมขึ้นมาในทศวรรษต่อมา
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 2 (NEW) ─── */}
        <Chapter
          id="ch2"
          num="CHAPTER 02"
          title='Attachment Behavioral System: ระบบที่ถูก "หลีกเลี่ยง"'
        >
          <Body>
            ก่อนจะเข้าใจว่า Avoidant Attachment คืออะไร ต้องเข้าใจก่อนว่า
            &quot;ระบบ&quot; ที่กำลังถูก &quot;หลีกเลี่ยง&quot;
            นั้นทำงานอย่างไรในคนที่ Secure ตามทฤษฎีของ Bowlby,{" "}
            <Term>Attachment Behavioral System (ABS)</Term> คือระบบ motivational
            ที่ทำงานตลอดชีวิต ไม่ใช่แค่ในวัยเด็ก โดยมี &quot;set-goal&quot;
            คือการรักษา <em>felt security</em> —
            ความรู้สึกปลอดภัยเมื่ออยู่ในความสัมพันธ์กับ attachment figure
            <Ref>[9]</Ref>
          </Body>
          <Body>
            ระบบนี้ activate เมื่อมี attachment-relevant threats
            ซึ่งอาจเป็นภัยจากภายนอก (อันตราย) หรือจากความสัมพันธ์เอง (การแยกจาก
            attachment figure, สัญญาณการปฏิเสธ) เมื่อ activate แล้ว
            ระบบจะกระตุ้นพฤติกรรม proximity-seeking — การหาความใกล้ชิดกับ
            attachment figure
          </Body>

          <SectionHeading>4 องค์ประกอบของ Attachment System</SectionHeading>
          <StepFlow
            steps={[
              {
                title: "1. Monitoring",
                description:
                  "ระบบ monitor สภาพแวดล้อมอย่างต่อเนื่อง โดยเฉพาะสัญญาณที่บ่งบอกว่า attachment figure ยัง available, accessible, และ responsive หรือไม่ — สามคำสำคัญของ Ainsworth",
              },
              {
                title: "2. Appraisal",
                description:
                  "เมื่อพบสัญญาณที่น่าวิตก ระบบประเมินว่า proximity-seeking จะช่วยได้ไหม โดยใช้ IWM เป็นเครื่องมือ คนที่มี negative IWM จะประเมินสถานการณ์ต่างจากคนที่มี positive IWM",
              },
              {
                title: "3. Regulation Strategy",
                description:
                  "เลือก strategy: Primary Strategy = proximity-seeking (แบบ Secure) หรือ Secondary Strategy = hyperactivation (Anxious) / deactivation (Avoidant) เมื่อ primary strategy ถูกพบว่าไม่ได้ผลหรืออันตราย",
              },
              {
                title: "4. Termination",
                description:
                  "ระบบ deactivate เมื่อบรรลุ felt security ในคน Avoidant ระบบ terminate ไว (หรือถูกบังคับให้ terminate) ก่อนที่จะได้ proximity จริงๆ ผ่านกลไก Defensive Exclusion",
              },
            ]}
          />

          <TheoryBox
            label="MIKULINCER & SHAVER"
            title="ทำไม Avoidance ถึงเกิดขึ้น: จุดแยกของ Secondary Strategies"
          >
            <p>
              เมื่อระบบ monitoring พบว่า attachment figure consistently
              unavailable หรือ rejecting เป็น pattern —
              ระบบต้องเลือกว่าจะทำอย่างไรกับ distress
            </p>
            <p>
              ถ้าประเมินว่า &quot;proximity-seeking อาจได้ผล แต่ไม่แน่&quot; →
              ระบบจะเลือก <strong>hyperactivation</strong> (Anxious)
              ถ้าประเมินว่า &quot;proximity-seeking ไม่ได้ผล
              และอาจทำให้แย่ลง&quot; → ระบบจะเลือก <strong>deactivation</strong>{" "}
              (Avoidant)
            </p>
            <p>
              ซึ่งหมายความว่า Avoidance เป็นการตอบสนองที่ &quot;rational&quot;
              ต่อ learning history ที่เฉพาะเจาะจง — ไม่ใช่ความบกพร่อง
              แต่เป็นการปรับตัวที่สมเหตุสมผลต่อสภาพแวดล้อมที่ผู้ดูแลไม่ตอบสนอง
              <Ref>[9]</Ref>
            </p>
          </TheoryBox>
        </Chapter>

        <Divider />

        {/* ─── CH 3 (was CH 2) ─── */}
        <Chapter
          id="ch3"
          num="CHAPTER 03"
          title="Strange Situation: การทดลองที่เปลี่ยนโลก"
        >
          <Body>
            ถ้า Bowlby สร้างกรอบทฤษฎี Mary Ainsworth
            คือคนที่พิสูจน์มันด้วยวิธีการเชิงประจักษ์ Ainsworth
            เริ่มจากการศึกษาภาคสนามในยูกันดา (1954–55)
            แต่วิธีการที่ทำให้เธอกลายเป็นตำนานคือ{" "}
            <Term>Strange Situation Procedure (SSP)</Term> ที่เธอออกแบบเมื่อ
            1969 และตีพิมพ์อย่างเป็นทางการในปี 1978<Ref>[1]</Ref>
          </Body>

          <TheoryBox label="หลักการออกแบบ" title="ทำไมต้องออกแบบแบบนี้?">
            <p>
              Ainsworth ต้องการวัดคุณภาพของ attachment ไม่ใช่แค่ปริมาณ เธอรู้ว่า
              attachment behavior
              จะแสดงออกชัดเจนที่สุดในสถานการณ์ที่มีความเครียดระดับปานกลาง
              จุดโฟกัสไม่ได้อยู่ที่พฤติกรรมระหว่าง separation แต่อยู่ที่{" "}
              <strong>พฤติกรรมในช่วง reunion</strong>{" "}
              เพราะนั่นคือจุดที่บอกว่าทารก &quot;ใช้&quot; ผู้เลี้ยงดูเป็น safe
              haven ได้หรือไม่
            </p>
          </TheoryBox>

          <SectionHeading>ขั้นตอน SSP</SectionHeading>
          <StepFlow
            steps={[
              {
                title: "Mother + Child เข้าห้อง",
                description:
                  'แม่วางลูกลง ทารกเริ่มสำรวจของเล่น ใช้แม่เป็น "Secure Base"',
              },
              {
                title: "คนแปลกหน้าเข้ามา",
                description: "ระดับความตื่นตัวเพิ่มขึ้น ทารกมองหาแม่มากขึ้น",
              },
              {
                title: "แม่ออกไปครั้งแรก",
                description: "จุดวัดสำคัญ: ทารกตอบสนองต่อการแยกอย่างไร?",
              },
              {
                title: "แม่กลับมา (Reunion ครั้งที่ 1)",
                description:
                  "จุดวัดที่สำคัญที่สุด ทารกตอบสนองต่อการกลับมาของแม่อย่างไร?",
              },
              {
                title: "แม่ออกไปอีกครั้ง (ทารกอยู่คนเดียว)",
                description: "เพิ่มระดับความเครียดสูงสุด",
              },
              {
                title: "คนแปลกหน้ากลับมา",
                description:
                  "ดูว่าทารกหันไปหาคนแปลกหน้าเพื่อขอความสบายใจได้ไหม",
              },
              {
                title: "แม่กลับมา (Reunion ครั้งที่ 2)",
                description: "วัดอีกครั้งหลังจากความเครียดสูงสุด",
              },
            ]}
          />

          <SectionHeading>ผลลัพธ์ที่ Ainsworth พบ</SectionHeading>
          <ComparisonTable
            headers={[
              "รูปแบบ",
              "พฤติกรรมตอน Reunion",
              "พฤติกรรมแม่ที่บ้าน",
              "สัดส่วน",
            ]}
            rows={[
              [
                "Secure (B)",
                "แสดงความโล่งใจที่แม่กลับ ขอให้อุ้ม แล้วกลับไปสำรวจได้",
                "แม่ตอบสนองอย่างสม่ำเสมอและละเอียดอ่อน",
                "~60–65%",
              ],
              [
                "Anxious-Ambivalent (C)",
                'เครียดสูงมาก ร้องไห้หนัก แต่เมื่อแม่กลับกลับ "ผลัก" ออกด้วย',
                "แม่ตอบสนองไม่สม่ำเสมอ",
                "~10–15%",
              ],
              [
                { text: "Avoidant (A)", bold: true },
                {
                  text: 'ดูเหมือน "ไม่สนใจ" การออกและกลับของแม่ ไม่ร้องไห้ ไม่ขอให้อุ้ม',
                  bold: true,
                },
                {
                  text: 'แม่ "ปฏิเสธ" ความต้องการความใกล้ชิดของลูก',
                  bold: true,
                },
                { text: "~20–25%", bold: true },
              ],
            ]}
          />

          <PullQuote>
            ทารก Avoidant ที่ &quot;ไม่ร้องไห้&quot; ในตอนแรกดูเหมือนจะ cope
            ได้ดีกว่า แต่การวัด cortisol พบว่าระดับความเครียดสูงพอๆ กับกลุ่ม
            Anxious — พวกเขาไม่ได้ไม่เครียด แต่เรียนรู้ที่จะ &quot;ไม่แสดง&quot;
            มันออกมา
          </PullQuote>

          <TheoryBox
            label="KEY INSIGHT — Mary Main (1990)"
            title="Avoidant ไม่ใช่ Indifference — มันคือ Conditional Strategy"
          >
            <p>
              Main ตีความว่าพฤติกรรม Avoidant เป็น <em>conditional strategy</em>{" "}
              — กลยุทธ์ที่มีเงื่อนไข ไม่ใช่ความเฉยเมยโดยธรรมชาติ ทารก Avoidant
              เรียนรู้มาแล้วว่าถ้าแสดงความต้องการในตอนที่เครียด
              ผู้เลี้ยงดูมีแนวโน้มจะผลักออก ดังนั้นการ suppress attachment
              behavior จึงเป็นวิธีที่ฉลาดที่สุดในการ
              &quot;รักษาความใกล้ชิดบางส่วน&quot; — ใกล้พอที่จะได้รับการปกป้อง
              แต่ไม่ใกล้จนถูกปฏิเสธอีกครั้ง
            </p>
          </TheoryBox>

          <SectionHeading>A1 vs A2: Avoidant Subtypes</SectionHeading>
          <Body>
            ระบบ coding ของ Ainsworth แยก Avoidant ออกเป็น 2 subtype:{" "}
            <strong>A1 (Secure-Avoidant)</strong> หลีกเลี่ยงสูงมาก
            เพิกเฉยสมบูรณ์ ไม่มีท่าทีใดๆ ต่อผู้เลี้ยงดู และ{" "}
            <strong>A2 (Avoidant-Resistant)</strong> มีการหลีกเลี่ยงร่วมกับ
            contact resisting และความโกรธระดับต่ำ ซึ่งทำให้ยากต่อการแยกจาก B1
            ในบางกรณี
          </Body>

          <Body>
            Mary Main และ Judith Solomon เพิ่มประเภทที่สี่คือ{" "}
            <Term>Disorganized/Disoriented (D)</Term> ในปี 1986–90
            สำหรับทารกที่ไม่มีกลยุทธ์ที่สอดคล้องกัน แสดงพฤติกรรมแปลกประหลาดเช่น
            นอนราบกับพื้น หมุนตัว ค้างอยู่กับที่เหมือนแข็งทื่อ —
            ซึ่งมักพบในเด็กที่ผู้เลี้ยงดูเป็นแหล่งของความกลัวเองด้วย
            <Ref>[3]</Ref>
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 4 (was CH 3) ─── */}
        <Chapter
          id="ch4"
          num="CHAPTER 04"
          title="Internal Working Models: แผนที่จิตใจ"
        >
          <Body>
            แนวคิดที่เชื่อมระหว่างประสบการณ์วัยเด็กกับพฤติกรรมในผู้ใหญ่คือ{" "}
            <Term>Internal Working Models (IWM)</Term> — Bowlby ยืมคำนี้มาจาก
            Kenneth Craik IWM คืองานของสมองในการสร้าง &quot;แบบจำลองในใจ&quot;
            ของความสัมพันธ์ — ทั้งในแง่ของตัวเอง ในแง่ของคนอื่น
            และในแง่ของวิธีที่ความสัมพันธ์ทำงาน<Ref>[1]</Ref>
          </Body>

          <PullQuote>
            IWM ไม่ใช่แค่ความเชื่อ — มันคือโครงสร้างที่กรอง ตีความ
            และคาดเดาโลกสังคมรอบตัว ก่อนที่ความคิดจะเกิดขึ้น — Bowlby, 1973;
            Mikulincer &amp; Shaver, 2007
          </PullQuote>

          <SectionHeading>สาม Model ที่ IWM ประกอบด้วย</SectionHeading>
          <SubHeading>
            1. Model of Self — &quot;ฉันน่ารักพอที่จะได้รับความรักไหม?&quot;
          </SubHeading>
          <Body>
            เด็กที่แม่ตอบสนองต่อสัญญาณของตัวเองอย่างสม่ำเสมอจะพัฒนา Positive
            Model of Self ขึ้นมา ในทางตรงข้าม
            เด็กที่ถูกผลักออกทุกครั้งที่แสดงความต้องการความใกล้ชิดจะพัฒนา
            Negative Model of Self — ว่าความต้องการของตัวเองไม่สมเหตุสมผล
            ว่าตัวเองเป็นภาระ
          </Body>
          <NoteBox label="ข้อสังเกตที่สำคัญ">
            <p>
              คน Dismissive-Avoidant มักมี{" "}
              <em>Positive Model of Self ที่ดูเหมือนปกติ</em>{" "}
              (&quot;ฉันดีอยู่แล้ว พึ่งตัวเองได้&quot;) แต่ Bartholomew
              เสนอว่ามันเป็น <strong>compensatory positive self-model</strong> —
              สร้างขึ้นมาเพื่อชดเชยความเชื่อในระดับลึกกว่า คน Secure มี Positive
              Self Model ที่ยืดหยุ่น แต่ Dismissive มี Positive Self Model
              ที่แข็งทื่อและต้องได้รับการปกป้อง
            </p>
          </NoteBox>

          <SubHeading>
            2. Model of Others — &quot;คนอื่นเชื่อถือได้ไหม?&quot;
          </SubHeading>
          <Body>
            คนที่มี Negative Model of Others
            จะตีความพฤติกรรมของคนอื่นในแง่ร้ายโดยอัตโนมัติ — ถ้าแฟนตอบ chat ช้า
            นั่นหมายความว่าเขาไม่สนใจ
            ระบบนี้ทำงานก่อนที่จิตสำนึกจะมีเวลาคิดทบทวน
          </Body>

          <SubHeading>
            3. Model of Relationships — &quot;ความสัมพันธ์ทำงานยังไง?&quot;
          </SubHeading>
          <Body>
            Model นี้เป็น &quot;สคริปต์&quot;
            ที่กำหนดว่าความสัมพันธ์ควรเป็นอย่างไร เด็กที่ผ่านประสบการณ์ว่า
            &quot;ยิ่งฉันแสดงความต้องการ ยิ่งถูกผลักออก&quot; จะพัฒนาสคริปต์ว่า
            &quot;ในความสัมพันธ์ ฉันต้องพึ่งตัวเองเท่านั้น&quot;
          </Body>

          <TheoryBox
            label="EXPLICIT vs IMPLICIT"
            title="IWM มีสองระดับที่อาจขัดแย้งกัน"
          >
            <p>
              <strong>Explicit IWM</strong> — สิ่งที่คนรับรู้ได้อย่างมีสติ เช่น
              &quot;ฉันเชื่อว่าความสัมพันธ์สำคัญ&quot; วัดได้ด้วย self-report
              questionnaires เช่น ECR
            </p>
            <p>
              <strong>Implicit IWM</strong> — รูปแบบการประมวลผลที่อัตโนมัติ
              ไม่รู้ตัว ฝังอยู่ใน procedural memory วัดได้ด้วย reaction time
              paradigms หรือ AAI
            </p>
            <p>
              ที่น่าสนใจคือทั้งสองระดับอาจขัดแย้งกันได้ โดยเฉพาะในคน
              Dismissive-Avoidant ที่มักมี explicit IWM บวก
              (&quot;ฉันโอเคดี&quot;) แต่ implicit IWM แสดงรูปแบบที่แตกต่าง
            </p>
          </TheoryBox>

          <SectionHeading>ทำไม IWM ถึงเปลี่ยนยาก</SectionHeading>
          <Body>
            IWM ไม่ใช่ความทรงจำที่เก็บอยู่เป็นไฟล์ในสมอง แต่เป็นสิ่งที่ผสมอยู่ใน{" "}
            <em>Procedural Memory</em> —
            เหมือนกับที่เราไม่ต้องคิดถึงวิธีขี่จักรยานขณะที่กำลังขี่อยู่
            นี่คือเหตุผลที่คนเราสามารถ <em>รู้</em>{" "}
            อย่างมีเหตุผลว่าคู่รักของตัวเองเชื่อถือได้ แต่ยังคง <em>รู้สึก</em>{" "}
            อยากหนีออกไปอยู่ดี<Ref>[5]</Ref>
          </Body>

          <Body>
            งานวิจัยของ Ainsworth เองพบว่าแม่ของทารก Avoidant มีรูปแบบที่ชัดเจน:
            พวกเธอไม่ได้โหดร้ายหรือทอดทิ้ง แต่มีแนวโน้มเป็น{" "}
            <em>emotionally unavailable</em> อย่างสม่ำเสมอ
            โดยเฉพาะในช่วงที่ทารกแสดงความเครียด
            พวกเธอมักตอบสนองได้ดีในสถานการณ์ปกติ แต่จะ &quot;ปิด&quot;
            เมื่อทารกแสดงความต้องการทางอารมณ์ที่รุนแรง สิ่งนี้สร้าง IWM ว่า
            &quot;คนอื่นมักไม่ตอบสนองต่อความต้องการของฉัน
            ดังนั้นฉันควรซ่อนความต้องการ&quot;
          </Body>

          <TheoryBox
            label="Main (1991) — Multiple Models"
            title="เมื่อ IWM ขัดแย้งกัน: กรณีของ Fearful-Avoidant"
          >
            <p>
              เด็กที่โตมาในสภาพแวดล้อมที่ผู้เลี้ยงดูทั้งเป็น
              &quot;แหล่งของความปลอดภัย&quot; และ &quot;แหล่งของความกลัว&quot;
              จะพัฒนา IWM สองชุดที่ขัดแย้งกันสุดขีด ชุดหนึ่งบอกว่า
              &quot;ความสัมพันธ์ให้ความปลอดภัย&quot; อีกชุดบอกว่า
              &quot;ความสัมพันธ์เป็นอันตราย&quot; — ในผู้ใหญ่สะท้อนออกมาเป็น
              Fearful-Avoidant
              ที่พร้อมจะทั้งเข้าหาและหนีออกจากความสัมพันธ์ในเวลาเดียวกัน
            </p>
          </TheoryBox>
        </Chapter>

        <Divider />

        {/* ─── CH 5 (NEW) ─── */}
        <Chapter
          id="ch5"
          num="CHAPTER 05"
          title="Bartholomew 4-Category Model: โมเดล 4 ช่อง"
        >
          <Body>
            Kim Bartholomew และ Leonard Horowitz ตีพิมพ์โมเดลสำคัญในปี 1991
            ที่สร้างจากแนวคิด IWM ของ Bowlby โดยมองว่า IWM
            สามารถสรุปได้ด้วยสองมิติหลัก คือ <strong>Model of Self</strong>{" "}
            (ตัวเองน่ารัก/มีคุณค่า vs ไม่มีคุณค่า) และ{" "}
            <strong>Model of Other</strong> (คนอื่นน่าเชื่อถือ vs
            ไม่น่าเชื่อถือ) เมื่อนำมา cross กัน จะได้ 4 quadrant<Ref>[6]</Ref>
          </Body>

          <ComparisonTable
            headers={[
              "Attachment Style",
              "Model of Self",
              "Model of Other",
              "Core Pattern",
            ]}
            rows={[
              [
                "Secure",
                'บวก — "ฉันมีคุณค่า"',
                'บวก — "คนอื่นน่าเชื่อถือ"',
                "Comfortable with intimacy and autonomy",
              ],
              [
                "Preoccupied",
                'ลบ — "ฉันอาจไม่ดีพอ"',
                'บวก — "คนอื่นน่าจะดี"',
                "Clinging, needs validation",
              ],
              [
                { text: "Dismissive-Avoidant", bold: true },
                { text: 'บวก (compensatory) — "ฉันพอตัวเอง"', bold: true },
                { text: 'ลบ — "คนอื่นไม่น่าไว้ใจ"', bold: true },
                {
                  text: "Counter-dependent, denies need for closeness",
                  bold: true,
                },
              ],
              [
                { text: "Fearful-Avoidant", bold: true },
                { text: 'ลบ — "ฉันไม่น่ารัก"', bold: true },
                { text: 'ลบ — "คนอื่นจะทำร้าย"', bold: true },
                { text: "Wants intimacy but fears rejection", bold: true },
              ],
            ]}
          />

          <SectionHeading>
            Dismissive vs Fearful: ความแตกต่างที่สำคัญ
          </SectionHeading>
          <Body>
            <strong>Dismissive</strong> มี Self Model เชิงบวก (แม้จะเป็น
            compensatory)
            ซึ่งหมายความว่าพวกเขามีความมั่นใจในตัวเองสูงและไม่ต้องการอะไรจากคนอื่นแบบที่เชื่อจริงๆ
            กลยุทธ์ของพวกเขาคือ &quot;deactivation&quot; — ลด salience ของ
            attachment needs จนเกือบรู้สึกไม่ได้
            พวกเขามักมองว่าคนที่ต้องการความใกล้ชิดมากๆ ว่า &quot;needy&quot;
            หรือ &quot;clingy&quot;
          </Body>
          <Body>
            <strong>Fearful</strong> มี Self Model เชิงลบด้วย
            ซึ่งหมายความว่าพวกเขา <em>อยากมีความสัมพันธ์ใกล้ชิดมาก</em>{" "}
            แต่เชื่อว่าตัวเองไม่คู่ควร กลยุทธ์ของพวกเขาซับซ้อนกว่า — บางครั้ง
            hyperactivate (เรียกร้องความใกล้ชิด) บางครั้ง deactivate (ถอยหนี)
            ทำให้พฤติกรรมดู &quot;hot and cold&quot; จากมุมมองของคู่รัก
          </Body>

          <NoteBox label="IMPORTANT NUANCE">
            <p>
              นักวิจัยระวังมากในการแยกระหว่าง <em>authentic self-esteem</em>{" "}
              (Secure) กับ <em>defensive self-inflation</em> (Dismissive) คน
              Secure มี Self Model บวกที่ยืดหยุ่นและเปิดรับข้อมูลใหม่ได้ คน
              Dismissive มี Self Model บวกที่ <strong>ต้องรักษาไว้</strong> —
              มัน fragile กว่า ต้องการ defense mechanism คอยปกป้อง งานวิจัยพบว่า
              Dismissive มี implicit self-esteem ต่ำกว่า explicit self-esteem
              อย่างมีนัยสำคัญ
            </p>
          </NoteBox>
        </Chapter>

        <Divider />
        {/* ─── CH 6 (was CH 4) ─── */}
        <Chapter
          id="ch6"
          num="CHAPTER 06"
          title="Adult Attachment Interview (AAI): วัด IWM ในผู้ใหญ่"
        >
          <Body>
            ถ้า IWM ทำงานในระดับ implicit จะวัดมันในผู้ใหญ่ได้อย่างไร?
            การถามตรงๆ ว่า &quot;คุณมี Avoidant Attachment ไหม?&quot; ไม่ได้ผล
            เพราะคนที่มี Dismissing Attachment จะตอบว่า &quot;ไม่&quot;
            โดยสุจริต
          </Body>
          <Body>
            คำตอบที่ Mary Main, Carol George และ Nancy Kaplan พัฒนาขึ้นในปี 1985
            คือ <Term>Adult Attachment Interview (AAI)</Term> —
            การสัมภาษณ์กึ่งโครงสร้างที่ใช้เวลา 45–90 นาที
            ที่ไม่ได้วัดว่าวัยเด็กของคุณดีหรือแย่ แต่วัดว่าคุณ{" "}
            <em>เล่าเรื่องวัยเด็กของตัวเองได้อย่างสอดคล้องและมีความหมายไหม</em>
            <Ref>[4]</Ref>
          </Body>

          <TheoryBox
            label="DESIGN PRINCIPLE"
            title='การ "Surprise the Unconscious"'
          >
            <p>
              Main อธิบายว่า AAI ออกแบบมาเพื่อ &quot;surprise the
              unconscious&quot; —
              คำถามเกี่ยวกับประสบการณ์วัยเด็กที่เฉพาะเจาะจงบังคับให้ผู้พูดต้องดึงความทรงจำจาก
              implicit memory และ autobiographical memory พร้อมกัน
              วิธีที่เขา/เธอจัดการความตึงเครียดระหว่างสองระบบนี้แสดงออกมาในรูปแบบ
              discourse โดยที่ผู้พูดมักไม่รู้ตัว
            </p>
          </TheoryBox>

          <SectionHeading>
            สิ่งที่ AAI วัดจริงๆ: Grice&apos;s Maxims
          </SectionHeading>
          <ComparisonTable
            headers={["Maxim", "คืออะไร", "Secure ทำ", "Dismissing ทำ"]}
            rows={[
              [
                "Quality",
                "พูดความจริง มีหลักฐาน",
                "คำคุณศัพท์ตรงกับตัวอย่างที่ยกมา",
                'บอกว่า "แม่ดีมาก" แต่ตัวอย่างกลับขัดแย้ง',
              ],
              [
                "Quantity",
                "พูดในปริมาณที่เหมาะสม",
                "เล่าได้กระชับและมีสาระ",
                "เล่าสั้นมาก ตัดบท บอกว่าจำไม่ได้",
              ],
              [
                "Relation",
                "พูดในสิ่งที่เกี่ยวข้อง",
                "สอดคล้องกับคำถาม",
                "เบี่ยงเรื่อง พูดถึงความสำเร็จตัวเองแทน",
              ],
              [
                "Manner",
                "พูดชัดเจน ไม่คลุมเครือ",
                "เรื่องเล่ามี logic ชัดเจน",
                'เรื่องเล่า "ถูกตัด" ก่อนถึงส่วนที่เจ็บปวด',
              ],
            ]}
          />

          <SectionHeading>ระบบ Scoring แบบ 2 ชั้น</SectionHeading>
          <Body>
            AAI มีระบบ scoring 2 ชั้น:{" "}
            <strong>Inferred Experience Scales</strong> (10 scales วัดระดับ 1-9
            ประเมินว่าผู้พูดน่าจะได้รับการปฏิบัติจากผู้เลี้ยงดูแบบไหน เช่น
            loving, rejecting, neglecting) และ{" "}
            <strong>State of Mind Scales</strong> ซึ่งสำคัญกว่า —
            ประเมินวิธีการพูด ไม่ใช่เนื้อหา ได้แก่ idealization, insistence on
            lack of recall, involving anger, passivity of discourse, coherence
            of transcript, metacognitive monitoring, unresolved loss/trauma
            <Ref>[4]</Ref>
          </Body>

          <SectionHeading>
            Dismissing Classification: &quot;กระจกเงาที่แตก&quot;
          </SectionHeading>
          <Body>
            <strong>Idealization:</strong> พูดถึงวัยเด็กเชิงบวกมากด้วยคำทั่วไป
            เช่น &quot;พ่อแม่ดีมาก รักกันมาก ปกติดี&quot;
            แต่พอถามว่ายกตัวอย่างได้ไหม กลับจำไม่ได้
            หรือตัวอย่างที่ยกมากลับขัดแย้ง เช่น บอกว่า &quot;แม่ดีมาก&quot;
            แต่ตัวอย่างบ่งชี้ว่าแม่ไม่อยู่บ้านหรือไม่ตอบสนองเมื่อเจ็บป่วย —
            coder เรียก pattern นี้ว่า <em>&quot;กระจกเงาที่แตก&quot;</em>
          </Body>
          <Body>
            <strong>Insistence on Lack of Recall:</strong> อ้างซ้ำๆ
            ว่าจำวัยเด็กไม่ได้ แต่อาจจำรายละเอียดอื่นที่ไม่เกี่ยวกับ attachment
            ได้ดี — บ่งชี้ถึง selective suppression ไม่ใช่ memory deficit ทั่วไป
          </Body>
          <Body>
            <strong>Derogation of attachment:</strong> บางครั้งคน Dismissing
            จะแสดง contempt ต่อความต้องการความใกล้ชิด ทั้งของตัวเองและคนอื่น
            วิจารณ์คนที่ &quot;อ่อนแอ&quot; หรือ &quot;needy&quot; ซึ่ง Main
            มองว่าเป็น defense ที่ strong กว่า idealization
          </Body>

          <PullQuote>
            ผู้ฝึกอบรม AAI มักบอกว่า &quot;คนที่มีวัยเด็กแย่จริงๆ
            ไม่จำเป็นต้องได้ Dismissing —
            ที่สำคัญกว่าคือเขารับรู้ถึงความแย่นั้นหรือไม่&quot;
          </PullQuote>

          <TheoryBox label="PREOCCUPIED (E)" title="วิธีพูดที่ยังพัวพันกับอดีต">
            <p>
              เป็นอีกรูปแบบของ insecurity ที่แตกต่างจาก Dismissing โดยสิ้นเชิง
              คน Preoccupied มักเล่าเรื่องยาวมาก วนซ้ำ นอกเรื่อง
              ผสมปนเประหว่างอดีตและปัจจุบัน
              บ่อยครั้งยังคงโกรธพ่อแม่อยู่อย่างเต็มที่ในตอนที่เล่า — ซึ่ง
              parallel กับ Anxious Attachment ในเด็กและผู้ใหญ่
            </p>
          </TheoryBox>

          <TheoryBox
            label="UNRESOLVED/DISORGANIZED (U/d)"
            title="การพังทลายของ discourse ในจุดเฉพาะ"
          >
            <p>
              Classification นี้ assign ร่วมกับ classification หลัก
              เมื่อผู้พูดแสดง lapses ในการ monitoring ขณะพูดถึง loss หรือ abuse
              โดยเฉพาะ เช่น พูดในฐานะที่ผู้เสียชีวิตยังมีชีวิตอยู่
              หยุดชะงักกลางประโยคโดยไม่มีเหตุผล หรือแสดงความกลัวต่อผู้เลี้ยงดู —
              เชื่อว่า correlate กับ trauma ที่ยังไม่ได้ประมวลผล
            </p>
          </TheoryBox>

          <TheoryBox
            label="FINDING — การถ่ายทอดข้ามรุ่น"
            title="AAI ทำนาย SSP ของลูกได้"
          >
            <p>
              เมื่อนักวิจัยทำ AAI กับหญิงตั้งครรภ์ก่อนคลอดลูก แล้วทำ SSP
              กับลูกตอนอายุ 12 เดือน — AAI classification ของแม่สามารถทำนาย SSP
              classification ของลูกได้ด้วยความแม่นยำราว 75% (van IJzendoorn,
              1995 meta-analysis)<Ref>[4]</Ref>
            </p>
          </TheoryBox>

          <DataGrid
            cells={[
              {
                value: "75%",
                label: "ทำนาย SSP ของลูกจาก AAI ของแม่",
                source: "van IJzendoorn, 1995 meta-analysis",
              },
              {
                value: "r ≈ 0",
                label: "ความสัมพันธ์ระหว่าง AAI กับ ECR",
                source: "Roisman et al., 2007",
              },
              {
                value: "78%",
                label: "Test-retest reliability ของ AAI (3 เดือน)",
                source: "kappa = .63",
              },
            ]}
          />
        </Chapter>

        <Divider />

        {/* ─── CH 7 (was CH 5) ─── */}
        <Chapter
          id="ch7"
          num="CHAPTER 07"
          title="โมเดลสองมิติและ ECR Scale: จากประเภทสู่มิติต่อเนื่อง"
        >
          <Body>
            การเปลี่ยนแปลงที่สำคัญที่สุดในการวัด Attachment
            ในผู้ใหญ่เกิดขึ้นในปี 1998 เมื่อ Brennan, Clark และ Shaver ทำ factor
            analysis ของแบบวัด Attachment ทั้งหมดที่มีอยู่ รวม 323 ข้อ
            และพบว่าทุกอย่างสรุปลงเหลือ <strong>สองมิติอิสระ</strong>
            <Ref>[6]</Ref>
          </Body>

          <SectionHeading>มิติที่ 1: Attachment Anxiety</SectionHeading>
          <Body>
            วัดความกลัวต่อการถูกทอดทิ้ง ความต้องการการยืนยันจากคนอื่น คนที่มี
            Anxiety สูงมักคิดวนเวียนเรื่องความสัมพันธ์
            ตีความสัญญาณคลุมเครือว่าเป็น rejection
          </Body>

          <SectionHeading>มิติที่ 2: Attachment Avoidance</SectionHeading>
          <Body>
            วัดความไม่สบายใจกับความใกล้ชิดและการพึ่งพาคนอื่น
            การชอบรักษาระยะห่างทางอารมณ์ คนที่มี Avoidance
            สูงมักรู้สึกอึดอัดเมื่อมีคนพึ่งพาหรือเปิดเผยตัวเองมากเกินไป
          </Body>

          <Body>
            Fraley, Waller &amp; Brennan (2000) พัฒนา <Term>ECR-R</Term> โดยใช้
            Item Response Theory (IRT) เพื่อเพิ่ม reliability โดยเฉพาะในช่วง
            extreme ของ scale ECR-R มี 36 items (18 per subscale)
            และปัจจุบันเป็น gold standard ในการวิจัย
          </Body>

          <HighlightBlock>
            <p>
              <strong>ตัวอย่าง ECR-R Items (Avoidance subscale):</strong>
            </p>
            <p>
              • &quot;ฉันรู้สึกไม่สบายใจเมื่อ partner อยากใกล้ชิดฉันมาก&quot;
              <br />
              • &quot;ฉันชอบที่จะไม่ต้องพึ่งพาคนอื่น&quot;
              <br />
              • &quot;ฉันรู้สึกอึดอัดเมื่อต้องพูดถึงความรู้สึกของตัวเองกับ
              partner&quot;
              <br />
              • &quot;มันสำคัญสำหรับฉันที่จะรู้สึกว่าตัวเองพึ่งตัวเองได้&quot;
              <br />
              <em>
                ทุก item วัดบน 1-7 scale (Strongly disagree → Strongly agree)
              </em>
            </p>
          </HighlightBlock>

          <DataGrid
            cells={[
              {
                value: "36",
                label: "ข้อใน ECR Scale<br/>(18 Anxiety + 18 Avoidance)",
                source: "Brennan et al., 1998",
              },
              {
                value: "α=.94",
                label: "Cronbach's alpha ของ ECR-R",
                source: "Fraley, Waller & Brennan, 2000",
              },
              {
                value: "r = .62",
                label: "Avoidance × Fear of Intimacy",
                source: "SeyedEbrahimi & Hamedani, 2024",
              },
              {
                value: "r = −.53",
                label: "Avoidance × Marital Satisfaction",
                source: "SeyedEbrahimi & Hamedani, 2024",
              },
            ]}
          />

          <SectionHeading>ความสำคัญของการมองแบบมิติต่อเนื่อง</SectionHeading>
          <Body>
            <strong>ประการแรก</strong>: มันทำให้เห็นว่า Dismissive และ
            Fearful-Avoidant แม้จะมีพฤติกรรมภายนอกคล้ายกัน
            แต่ต่างกันโดยสิ้นเชิงใน <em>มิติ Anxiety</em>{" "}
            <strong>ประการที่สอง</strong>: ทุกคนอยู่ในสเปกตรัม ไม่มีใคร
            &quot;เป็น&quot; หรือ &quot;ไม่เป็น&quot; Avoidant อย่างชัดเจน{" "}
            <strong>ประการที่สาม</strong>: ทำให้ ECR ใช้ใน survey ขนาดใหญ่ได้
            เปิดทางให้งานวิจัย Attachment ในผู้ใหญ่พุ่งสูงขึ้นอย่างก้าวกระโดด
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 8 (was CH 6) ─── */}
        <Chapter
          id="ch8"
          num="CHAPTER 08"
          title="Defensive Exclusion: กลไกหัวใจของ Avoidant Attachment"
        >
          <Body>
            ใน Loss (1980) Bowlby เสนอแนวคิดที่เขาเรียกว่า{" "}
            <Term>Defensive Exclusion</Term> — สมองมนุษย์มีกลไก Selective
            Exclusion ที่กรองข้อมูลบางอย่างออกจากการรับรู้สติ
            แต่สิ่งที่เกิดขึ้นใน Insecure Attachment คือกลไกนี้ถูก
            &quot;ยักยอก&quot; เพื่อกรองข้อมูลที่เจ็บปวดเกี่ยวกับความสัมพันธ์ออก
            <Ref>[7]</Ref>
          </Body>
          <Body>
            Bowlby เปรียบ Defensive Exclusion กับ &quot;psychological
            immunization&quot; — ระบบที่เคยป้องกันเด็กจากความเจ็บปวดที่ทนไม่ได้
            และยังคงทำงานอยู่ในผู้ใหญ่แม้จะไม่จำเป็นอีกต่อไป
          </Body>

          <PullQuote>
            Bowlby (1980): &quot;My thesis is that the traditionally termed
            defensive processes can all be understood as examples of the
            defensive exclusion of unwelcome information.&quot;
          </PullQuote>

          <SectionHeading>กลไกสองระดับของ Defensive Exclusion</SectionHeading>
          <Body>
            กระบวนการนี้ทำงานในสองระดับ: <strong>Perceptual Exclusion</strong> —
            ระบบประมวลผลข้อมูล attachment-relevant ช้าลงหรือให้ attention
            น้อยลงตั้งแต่แรก และ <strong>Memory Exclusion</strong> — episodic
            memories ที่เกี่ยวกับ attachment distress ถูก encode
            ไว้แบบที่เข้าถึงยาก หรือถูก decontextualize
            จากอารมณ์ที่เกิดขึ้นพร้อมกัน<Ref>[2]</Ref>
          </Body>

          <SectionHeading>
            สามสถานการณ์ที่ทำให้ Defensive Exclusion รุนแรงที่สุด
          </SectionHeading>
          <StepFlow
            steps={[
              {
                title: "พ่อแม่ไม่อยากให้ลูกรู้ แต่ลูกเห็นอยู่",
                description:
                  'พ่อแม่ทะเลาะกันรุนแรง แต่บอกลูกว่า "ไม่มีอะไร" เด็กเรียนรู้ว่าสิ่งที่ตัวเองรับรู้ไม่สามารถเชื่อถือได้',
              },
              {
                title: "พฤติกรรมของพ่อแม่ที่เจ็บปวดเกินกว่าจะยอมรับ",
                description:
                  'เมื่อผู้เลี้ยงดูเป็นทั้งแหล่งความปลอดภัยและแหล่งอันตราย — "Fright without solution"',
              },
              {
                title: "สิ่งที่เด็กคิดหรือทำที่พ่อแม่ปฏิเสธอย่างรุนแรง",
                description:
                  'เมื่อความต้องการของเด็กถูกตอบสนองด้วยการผลักออกซ้ำๆ เด็กเรียนรู้ที่จะ "ตัด" ความต้องการเหล่านั้นออก',
              },
            ]}
          />

          <TheoryBox
            label="MIKULINCER, DOLEV & SHAVER 2004"
            title="การทดลองเจาะผ่าน Defensive Exclusion"
          >
            <p>
              ผู้เข้าร่วมที่มี High Avoidance เมื่อ prime ด้วย &quot;I need
              you&quot; (supraliminal) — พวกเขาไม่ respond (Defensive Exclusion
              ทำงาน) แต่เมื่อ prime ด้วย &quot;closeness&quot; ในระดับ
              subliminal (ไม่รู้ตัว) — พวกเขาแสดง negative attitudes
              ต่อความใกล้ชิดมากกว่ากลุ่มอื่น
            </p>
            <p>
              เมื่อ load cognitive resources (ให้ทำงานอื่นไปด้วย) — Avoidant
              individuals แสดง attachment needs ออกมามากขึ้น หลักฐานว่า
              Defensive Exclusion ต้องการ cognitive effort<Ref>[9]</Ref>
            </p>
          </TheoryBox>

          <SectionHeading>Segregated Systems</SectionHeading>
          <Body>
            Bowlby แยกแยะระหว่าง Defensive Exclusion แบบทั่วไป กับ{" "}
            <Term>Segregated Systems</Term> ซึ่งเกิดขึ้นเมื่อ Defensive
            Exclusion ทำงานอย่างสมบูรณ์จนความทรงจำ ความรู้สึก และ IWM บางชุดถูก
            &quot;แยกออก&quot; อย่างสิ้นเชิง<Ref>[2]</Ref>
          </Body>

          <SectionHeading>
            Defensive Exclusion ในผู้ใหญ่: หลักฐานจาก Eye-tracking
          </SectionHeading>
          <Body>
            งานวิจัยด้วย eye-tracking (Bosmans et al., 2014) พบว่า เด็กที่มี
            Avoidant Attachment สูงมีแนวโน้มมองใบหน้าของแม่น้อยกว่า
            ทั้งใบหน้าที่เป็นกลาง ที่แสดงความสุข และที่แสดงความโกรธ —
            แม้แต่ข้อมูลเชิงบวกก็ถูกกรองออก เพราะมันยังเรียก attachment system
            ขึ้นมา<Ref>[8]</Ref>
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 9 (was CH 7) ─── */}
        <Chapter
          id="ch9"
          num="CHAPTER 09"
          title="Deactivating Strategies: Mikulincer &amp; Shaver's Model"
        >
          <Body>
            Mario Mikulincer และ Phillip Shaver พัฒนา Control System Model
            ที่อธิบายว่าระบบ Attachment ทำงานในผู้ใหญ่อย่างเป็นขั้นตอนอย่างไร
            (2003, 2007)<Ref>[9]</Ref>
          </Body>

          <SectionHeading>The Three-Module System</SectionHeading>
          <TheoryBox
            label="MODULE 1"
            title="Threat Monitoring — ระบบตรวจจับภัยคุกคาม"
          >
            <p>ทำงานตลอดเวลาและอัตโนมัติ เมื่อตรวจพบ Threat → Module 2 ทำงาน</p>
          </TheoryBox>
          <TheoryBox
            label="MODULE 2"
            title="Proximity Seeking — Primary Strategy"
          >
            <p>
              เมื่อมีภัย ให้หา Attachment Figure ถ้า Attachment Figure
              ตอบสนองได้ดี → ความเครียดลดลง (Secure) แต่ถ้าไม่ตอบสนอง → Module 3
              ทำงาน
            </p>
          </TheoryBox>
          <TheoryBox
            label="MODULE 3"
            title="Secondary Strategies — ทางเลือกเมื่อ Primary Strategy ไม่ได้ผล"
          >
            <p>
              <strong>Hyperactivation (Anxious):</strong> ระบบตีความว่า
              &quot;ถ้าฉันส่งสัญญาณให้เด่นชัดพอ เขาอาจจะตอบสนอง&quot;
              จึงเพิ่มความเข้มข้นของ attachment behavior — เพิ่ม monitoring,
              ขยาย negative emotions, rumination, overdependence
            </p>
            <p>
              <strong>Deactivation (Avoidant):</strong> ระบบตีความว่า
              &quot;proximity-seeking ไม่ได้ผล&quot; จึงลด attachment system
              activation ลง<Ref>[9]</Ref>
            </p>
          </TheoryBox>

          <SectionHeading>4 ระดับของ Deactivation</SectionHeading>
          <ComparisonTable
            headers={["ระดับ", "กลไก", "หลักฐานการวิจัย"]}
            rows={[
              [
                "Attentional",
                "กรองข้อมูล attachment ออกตั้งแต่ระดับความสนใจ",
                "Dot-probe paradigm พบว่า High-Avoidance มี attentional avoidance ต่อคำและภาพที่เกี่ยวกับ attachment",
              ],
              [
                "Memory",
                "ระงับการเรียกคืนความทรงจำ attachment",
                "Fraley & Shaver (1997) พบว่า High-Avoidance suppress ความคิด attachment ได้ดีกว่า — แต่เพิ่ม cognitive load สูง",
              ],
              [
                "Emotional",
                "Suppression ไม่ใช่ Absence",
                "High-Avoidance ไม่ได้ไม่รู้สึก แต่ suppress ในระดับการแสดงออก — อธิบาย cortisol paradox",
              ],
              [
                "Cognitive",
                "Distance Framing — มองจากมุมห่าง",
                'ใช้ abstract construals เมื่อคิดเรื่องความสัมพันธ์ มองว่าปัญหาเป็นเรื่อง "ไม่สำคัญในระยะยาว"',
              ],
            ]}
          />

          <SectionHeading>Deactivating Strategies: รายการกลวิธี</SectionHeading>
          <ComparisonTable
            headers={["กลวิธี", "กลไก", "ผลลัพธ์ที่สังเกตได้"]}
            rows={[
              [
                "Compulsive Self-Reliance",
                "เน้นว่าตัวเองพึ่งตัวเองได้",
                "ไม่ขอความช่วยเหลือแม้สมเหตุสมผล",
              ],
              [
                "Cognitive Suppression",
                "กดข่มความคิดเกี่ยวกับ Attachment",
                "ดูเหมือนไม่คิดเรื่องความสัมพันธ์ แต่ rebound effect รุนแรง",
              ],
              [
                "Expressive Suppression",
                "กดข่มการแสดงออกทางอารมณ์",
                'ดู "เยือกเย็น" ขณะที่ arousal ยังสูง',
              ],
              [
                "Attention Deflection",
                "เปลี่ยนความสนใจออกจากสัญญาณ Attachment",
                "โฟกัสงานหรืองานอดิเรก เมื่อความสัมพันธ์เริ่ม intense",
              ],
              [
                "Maintaining Distance",
                'ตั้ง "closeness ceiling" โดยไม่รู้ตัว',
                "ทำงานหนักขึ้นเมื่อความสัมพันธ์ใกล้ชิดมากขึ้น หรือหาเหตุผล criticize partner",
              ],
              [
                "Derogation of Attachment Needs",
                "มองว่าความต้องการความใกล้ชิดเป็นความอ่อนแอ",
                'วิจารณ์คนอื่นที่ "clingy"',
              ],
            ]}
          />

          <TheoryBox
            label="CRITICAL FINDING"
            title="Rebound Effect — Airport Study (Fraley &amp; Shaver, 1997)"
          >
            <p>
              การทดลองที่สังเกตคู่รักที่กำลังแยกกันที่สนามบิน พบว่าคู่
              High-Avoidance แสดง suppression ชัดเจน (ลดการสัมผัส ลด eye
              contact) แต่ในห้องแล็บที่วัดความคิดที่ถูกระงับ พบ{" "}
              <strong>rebound effect</strong> — ยิ่งพยายาม suppress ความคิด
              attachment ยิ่งคิดมากขึ้นเมื่อหยุด suppress
            </p>
            <p>
              นี่อธิบายว่าทำไมบางครั้ง High-Avoidance ถึง &quot;โผล่มาหา&quot;
              อย่างกะทันหัน หลังจากหายไปนาน — ระบบ suppression
              อาจเสียสมดุลได้เมื่อ exhausted
            </p>
          </TheoryBox>

          <TheoryBox
            label="COST OF DEACTIVATION"
            title="ราคาที่ต้องจ่าย: Short-term adaptive แต่ Long-term maladaptive"
          >
            <p>
              Deactivating strategies ทำงานได้ดีในระยะสั้น แต่ในระยะยาวมี cost
              สูง:
            </p>
            <p>
              • ลด emotional intimacy ในความสัมพันธ์ทุกประเภท ลด social support
              <br />
              • เพิ่ม cognitive load จากการต้อง monitor และ suppress
              อย่างต่อเนื่อง
              <br />
              • ลด emotional clarity — มักรายงาน alexithymia-like symptoms
              (รู้สึกตัวเองไม่ออก)
              <br />
              • ลด ability ในการ seek support เมื่อจริงๆ ต้องการ
              ส่งผลต่อสุขภาพกาย
              <br />• เมื่อ cognitive resources ลดลง (เหนื่อยล้า เครียดมาก) กลไก
              suppression มักพังและ emotions ออกมาแบบ flooding
            </p>
          </TheoryBox>

          <NoteBox label="สิ่งที่คนมักเข้าใจผิด">
            <p>
              Deactivating Strategies ไม่ได้หมายความว่าคน Avoidant
              &quot;ไม่สนใจ&quot; ความสัมพันธ์ แต่หมายความว่าระบบ Attachment
              ของพวกเขาถูกตั้งค่าให้ทำงานในระดับต่ำ เพื่อหลีกเลี่ยง activation
              ที่เคยเชื่อมโยงกับความเจ็บปวด <em>ในระดับร่างกาย</em>{" "}
              ระบบยังคงทำงานอยู่ตลอดเวลา — มันแค่ถูกควบคุมไว้
            </p>
          </NoteBox>
        </Chapter>

        <Divider />

        {/* ─── CH 10 (NEW) ─── */}
        <Chapter
          id="ch10"
          num="CHAPTER 10"
          title="Disorganized Attachment: ความกลัวที่ไม่มีทางออก"
        >
          <Body>
            Main &amp; Solomon (1986, 1990) ค้นพบกลุ่มทารกที่พฤติกรรม reunion
            ไม่เข้ากับสาม category ของ Ainsworth เลย
            พวกเขาแสดงพฤติกรรมที่แปลกมาก เช่น วิ่งเข้าหาแม่แล้วหยุดแข็งกลางทาง,
            นั่งเฉยไม่ขยับ, หันหน้าหนีขณะเข้าหา, มองแบบ trance-like,
            หรือล้มลงพื้น — Main เรียก pattern นี้ว่าเป็น{" "}
            <em>&quot;breakdown of organized strategy&quot;</em>
            <Ref>[3]</Ref>
          </Body>

          <TheoryBox
            label="MAIN & HESSE (1990)"
            title='"Fright Without Solution" — ความกลัวที่ไม่มีทางออก'
          >
            <p>
              Main และ Hesse เสนอ hypothesis ที่ทรงพลัง: ทารก Disorganized
              มักมีผู้เลี้ยงดูที่ตัวเองเป็น &quot;source of fear&quot; —
              ไม่ว่าจะเป็นเพราะพฤติกรรมที่น่ากลัว หรือเพราะ trauma
              ที่ยังไม่ได้ประมวลผลของผู้เลี้ยงดูที่แสดงออกมาในรูปแบบที่ทารกรับรู้ได้ว่า
              &quot;ไม่ปกติ&quot;
            </p>
            <p>
              ผลที่ตามมาคือทารกเผชิญกับ <strong>irresolvable paradox</strong>:
              ระบบ attachment สั่งให้วิ่งเข้าหา attachment figure เมื่อกลัว แต่
              attachment figure นั้นเองคือแหล่งที่มาของความกลัว
              ไม่ว่าจะวิ่งเข้าหาหรือหนีออกล้วนนำไปสู่ความเครียดมากขึ้น ระบบจึง
              &quot;freeze&quot; — ทั้งสองสัญญาณยกเลิกกันเอง
            </p>
          </TheoryBox>

          <SectionHeading>
            Disorganized ในเด็ก → Fearful-Avoidant ในผู้ใหญ่
          </SectionHeading>
          <Body>
            ใน Fearful-Avoidant ในผู้ใหญ่ (ซึ่ง parallel กับ Disorganized
            ในเด็ก) กลไกนี้ยังคงทำงานอยู่:
            ความต้องการความใกล้ชิดและความกลัวความใกล้ชิดเป็น competing forces
            ที่ทำงานพร้อมกัน
            ทำให้เกิดพฤติกรรมที่ดูไม่สม่ำเสมอและเดาไม่ได้สำหรับคนรอบข้าง —
            ซึ่งเป็นที่มาของ relational chaos
          </Body>

          <TheoryBox
            label="CLINICAL RELEVANCE"
            title="Disorganized Attachment และ Psychopathology"
          >
            <p>
              meta-analysis (van IJzendoorn et al., 1999) พบว่า Disorganized
              attachment พบมากในกลุ่มผู้ที่มีประวัติ childhood maltreatment ถึง{" "}
              <strong>~48%</strong> (เทียบกับ ~15% ในกลุ่มทั่วไป)
              และมีความเชื่อมโยงกับ{" "}
              <em>BPD, Dissociative Disorders, Complex PTSD</em> มากกว่า
              attachment รูปแบบอื่นอย่างมีนัยสำคัญ
            </p>
            <p>
              อย่างไรก็ตามนักวิจัยเตือนว่าไม่ควร conflate Disorganized
              attachment กับ psychopathology โดยตรง — Disorganized attachment
              เป็น <strong>risk factor</strong> ไม่ใช่ diagnosis และมีผู้ที่มี
              Disorganized attachment จำนวนมากที่มี functioning ดีในผู้ใหญ่
            </p>
          </TheoryBox>

          <DataGrid
            cells={[
              {
                value: "~48%",
                label:
                  "อัตราของ Disorganized<br/>ในกลุ่ม childhood maltreatment",
                source: "van IJzendoorn et al., 1999",
              },
              {
                value: "~15%",
                label: "อัตราของ Disorganized<br/>ในกลุ่มทั่วไป",
                source: "van IJzendoorn et al., 1999",
              },
            ]}
          />
        </Chapter>

        <Divider />
        {/* ─── CH 11 (was CH 8) ─── */}
        <Chapter
          id="ch11"
          num="CHAPTER 11"
          title="ประสาทชีววิทยาของ Avoidant Attachment"
        >
          <Body>
            การถ่ายภาพสมองเริ่มยืนยันสิ่งที่นักทฤษฎีเสนอมานาน Avoidant
            Attachment ไม่ใช่แค่ &quot;ทัศนคติ&quot;
            แต่มีรากฐานในรูปแบบการทำงานของสมองที่วัดได้<Ref>[10]</Ref>
          </Body>

          <SectionHeading>Amygdala และ Threat Processing</SectionHeading>
          <Body>
            คนที่มี High Avoidance มี Amygdala activation
            ลดลงเมื่อเผชิญกับภาพที่กระตุ้น Attachment — Deactivation
            ที่ทำงานในระดับ Neural แต่เมื่อ cognitive load เพิ่มขึ้น
            Deactivation ล้มเหลว และ Amygdala กลับมาตอบสนองสูงกว่าปกติ —
            ยืนยันว่าการกดข่มเป็น Active Process ที่ต้องใช้ทรัพยากรทางสติ
            <Ref>[10]</Ref>
          </Body>

          <SectionHeading>
            HPA Axis, Cortisol Paradox และ Allostatic Load
          </SectionHeading>
          <Body>
            <Term>Hypothalamic-Pituitary-Adrenal (HPA) Axis</Term> ในคน Avoidant
            มีความซับซ้อน: ระดับการรายงานตัวเองว่าเครียดต่ำกว่าปกติ แต่ cortisol
            จริงๆ ยังสูงอยู่ บางงานวิจัยพบว่าคน Avoidant มี{" "}
            <em>blunted cortisol response</em> ในระยะยาว<Ref>[9]</Ref>
          </Body>
          <Body>
            ผลระยะยาวของการ chronically suppress attachment needs คือ{" "}
            <Term>Allostatic Load</Term> — ต้นทุนสะสมของการ adapt อย่างต่อเนื่อง
            การที่ต้อง actively suppress emotional responses ต้องการ cognitive
            resources ตลอดเวลา งานวิจัยพบว่า Insecure Attachment
            สัมพันธ์กับผลลัพธ์สุขภาพที่แย่กว่าในระยะยาว
            ทั้งด้านสุขภาพกายและจิตใจ
          </Body>

          <SectionHeading>Oxytocin System</SectionHeading>
          <Body>
            Oxytocin ไม่ได้ &quot;สร้างความผูกพัน&quot; เสมอไป —
            ผลของมันขึ้นอยู่กับ Attachment Style ของผู้รับ ในคน Secure:
            เพิ่มความไว้วางใจ ในคน Avoidant: ผลมักน้อยกว่า Feldman (2017) พบว่า
            Avoidant Attachment สัมพันธ์กับ attenuated OT response ต่อ social
            stimuli — สถานการณ์ที่คนอื่น release OT ได้ดี กลับ trigger OT
            น้อยกว่าในคน Avoidant บางงานวิจัยยังพบ polymorphisms ในยีน OXTR
            ที่เกี่ยวข้อง แต่ effect sizes ยังเล็ก
          </Body>

          <SectionHeading>
            Prefrontal Cortex และ Emotion Regulation
          </SectionHeading>
          <Body>
            คน Avoidant มี PFC ที่ทำงาน <em>มากกว่า</em> ในบริบทที่เกี่ยวกับ
            Attachment — พวกเขา &quot;ใช้สมองส่วนคิด&quot;
            เพื่อควบคุมสมองส่วนรู้สึกมากกว่าคน Secure บริเวณ mPFC แสดง
            connectivity กับ amygdala ในแบบที่สะท้อน &quot;top-down
            inhibition&quot; ที่ excessive<Ref>[10]</Ref>
          </Body>

          <SectionHeading>Insula และ Default Mode Network</SectionHeading>
          <Body>
            <strong>Insula</strong> ซึ่งทำหน้าที่รับรู้ภาวะภายใน (interoception)
            แสดง activation ลดลงใน High-Avoidance เมื่อประมวลผล social-emotional
            information — บ่งชี้ว่ากลไก deactivation อาจทำงานบางส่วนผ่านการ
            dampen body signals
          </Body>
          <Body>
            <strong>Default Mode Network (DMN)</strong> ที่ทำงานตอน rest และ
            self-referential thinking แสดง connectivity ต่างกันใน Avoidant —
            โดยเฉพาะส่วน medial prefrontal cortex ที่เกี่ยวกับ mentalizing ซึ่ง
            parallel กับ Fonagy&apos;s Reflective Functioning framework
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 12 (was CH 9) ─── */}
        <Chapter
          id="ch12"
          num="CHAPTER 12"
          title="Mentalization &amp; Reflective Functioning: รู้จักจิตใจตัวเองและคนอื่น"
        >
          <Body>
            Peter Fonagy และ Mary Target พัฒนาแนวคิด <Term>Mentalization</Term>{" "}
            หรือ <Term>Reflective Functioning (RF)</Term> ในทศวรรษ 1990s —
            ความสามารถในการ &quot;เห็น&quot; ว่าทั้งตัวเองและคนอื่นมีจิตใจ —
            มีความคิด ความรู้สึก ความต้องการ ความตั้งใจ<Ref>[11]</Ref>
          </Body>

          <SectionHeading>
            ทำไม Attachment ถึงส่งผลต่อ Mentalization?
          </SectionHeading>
          <Body>
            Fonagy เสนอว่า Mentalization
            พัฒนาขึ้นในบริบทของความสัมพันธ์ที่ปลอดภัย เด็กเรียนรู้ที่จะ
            &quot;เห็น&quot; จิตใจของตัวเองผ่านการที่ผู้เลี้ยงดู <em>สะท้อน</em>{" "}
            จิตใจของเด็กกลับมาอย่างถูกต้อง — <Term>Marked Mirroring</Term>
            <Ref>[11]</Ref>
          </Body>

          <SectionHeading>RF ต่ำในบริบทของ Attachment โดยเฉพาะ</SectionHeading>
          <Body>
            คนที่มี Avoidant Attachment อาจมี RF สูงในหลายบริบท —
            เก่งมากในการอ่านคนในที่ทำงาน แต่เมื่อระบบ Attachment ถูก activate
            ในความสัมพันธ์ใกล้ชิด RF จะลดลงอย่างเห็นได้ชัด
          </Body>
          <Body>
            ตัวอย่างเช่น เมื่อ partner ดูเหนื่อย — คน Secure (RF สูง) จะคิดว่า
            &quot;เขาอาจมีเรื่องเครียด น่าถาม&quot; คน Avoidant (RF ต่ำในบริบท
            attachment) อาจ interpret ว่า &quot;เขาอยากอยู่คนเดียว
            ฉันไม่ควรรบกวน&quot; — ซึ่ง reflects IWM ของตัวเอง ไม่ใช่ mental
            state ของ partner
          </Body>

          <TheoryBox
            label="FONAGY — TRANSMISSION GAP"
            title="RF เป็น mediator ของการส่งต่อข้ามรุ่น"
          >
            <p>
              หนึ่งในปัญหาที่นักวิจัยพยายามแก้คือ &quot;Transmission Gap&quot; —
              การส่งต่อ Attachment Style จากรุ่นสู่รุ่นมีค่า correlation ราว r =
              .47 แต่ยังไม่อธิบายได้ว่ากลไกคืออะไร
            </p>
            <p>
              Fonagy &amp; Target เสนอว่า RF ของแม่เป็นตัวกลาง: แม่ที่มี RF
              สูงสามารถ mentalize ความต้องการของลูกได้แม่นยำกว่า ทำให้ตอบสนองได้
              attuned มากกว่า ส่งผลให้ลูกพัฒนา Secure Attachment ได้ —
              แม้แม่จะมีประวัติ Insecure Attachment เองก็ตาม{" "}
              <strong>
                RF จึงเป็น protective factor ที่สำคัญที่สุดในการ &quot;break the
                cycle&quot;
              </strong>
              <Ref>[11]</Ref>
            </p>
          </TheoryBox>

          <TheoryBox
            label="Fonagy et al. — RF Scale"
            title="วิธีวัด Reflective Functioning"
          >
            <p>
              Fonagy พัฒนา RF Scale จาก AAI transcripts ให้คะแนนตั้งแต่ -1
              (Actively Anti-Reflective) ถึง 9 (Exceptional RF) คนที่ได้คะแนน -1
              ถึง 3 มักมีปัญหาสุขภาพจิต คนที่ได้ 5–7 ถือว่าปกติ
            </p>
          </TheoryBox>
        </Chapter>

        <Divider />

        {/* ─── CH 13 (was CH 10) ─── */}
        <Chapter
          id="ch13"
          num="CHAPTER 13"
          title="มุมมองวิวัฒนาการ: Avoidance ไม่ใช่ข้อบกพร่อง"
        >
          <Body>
            Jay Belsky เสนอ <Term>Life History Theory</Term> มาประยุกต์กับ
            Attachment ในงานปี 1997–1999 โดยมองว่า Insecure Attachment ไม่ใช่
            &quot;ความล้มเหลว&quot; แต่เป็น{" "}
            <em>
              กลยุทธ์วิวัฒนาการที่ถูกออกแบบมาเพื่อตอบสนองต่อสภาพแวดล้อมเฉพาะ
            </em>
            <Ref>[12]</Ref>
          </Body>

          <ComparisonTable
            headers={["สภาพแวดล้อม", "Attachment Style", "กลยุทธ์ชีวิต"]}
            rows={[
              [
                "ทรัพยากรอุดมสมบูรณ์ ผู้ดูแลเชื่อถือได้",
                "Secure",
                "ลงทุนในความสัมพันธ์ระยะยาว ร่วมมือสูง",
              ],
              [
                "ทรัพยากรไม่แน่นอน ผู้ดูแลคาดเดาไม่ได้",
                "Anxious",
                "เฝ้าระวังสูง ยึดความสัมพันธ์ไว้แน่น",
              ],
              [
                "ทรัพยากรขาดแคลน ผู้ดูแลไม่พร้อม",
                "Avoidant",
                "พึ่งตัวเองสูง ลดการลงทุนในความสัมพันธ์",
              ],
            ]}
          />

          <TheoryBox
            label="DEL GIUDICE 2009"
            title="Conditional Adaptation Model"
          >
            <p>
              Del Giudice พัฒนาโมเดลที่ประณีตกว่า โดยเสนอว่า Attachment Style
              เป็น &quot;early calibration&quot; ของ Life History Strategy
              ที่เกิดขึ้นในช่วง sensitive period (ประมาณ 5-7 ปีแรก)
            </p>
            <p>
              สมองเด็ก &quot;สแกน&quot; สภาพแวดล้อมผ่าน quality ของ care
              ที่ได้รับ: <strong>Avoidant Calibration</strong> จะ calibrate
              ไปทาง &quot;fast strategy&quot; — ลงทุนกับตัวเอง
              ระวังการพึ่งพาคนอื่น ไม่ลงทุนกับ long-term pair bonds มากเกินไป
            </p>
          </TheoryBox>

          <PullQuote>
            กลยุทธ์วิวัฒนาการที่เคยช่วยให้รอดในวัยเด็ก
            อาจกลายเป็นสิ่งที่ขัดขวางความเจริญในวัยผู้ใหญ่
          </PullQuote>

          <NoteBox label="IMPORTANT CAVEAT">
            <p>
              การที่ Avoidant Attachment อาจเคยมี evolutionary advantage{" "}
              <strong>ไม่ได้หมายความว่ามันดี หรือไม่ควรเปลี่ยน</strong>{" "}
              ในบริบทปัจจุบัน ความสัมพันธ์ที่ก่อให้เกิด Avoidance มักเป็นผลมาจาก
              circumstances ที่ไม่ควรเกิดขึ้น เช่น neglect, abuse, หรือ trauma —
              ไม่ใช่เป็นสิ่งที่ &quot;ควร&quot; เกิดขึ้นเพื่อ optimization LHT
              เป็นแค่กรอบอธิบาย ไม่ใช่ prescription
            </p>
          </NoteBox>
        </Chapter>

        <Divider />

        {/* ─── CH 14 (NEW) ─── */}
        <Chapter
          id="ch14"
          num="CHAPTER 14"
          title="ข้อถกเถียงในงานวิจัย Attachment"
        >
          <SectionHeading>
            Debate 1: AAI vs ECR — วัดสิ่งเดียวกันไหม?
          </SectionHeading>
          <Body>
            van IJzendoorn (1995) แสดงว่า AAI ทำนาย infant SSP ได้ดีมาก แต่
            Roisman et al. (2007) พบว่า AAI กับ ECR (self-report) มี{" "}
            <em>correlation เกือบศูนย์</em> ในหลาย studies
            ฝ่ายหนึ่งมองว่าทั้งสองวัดสิ่งที่แตกต่างกันโดยธรรมชาติ (implicit vs
            explicit IWM) และทั้งสองมี validity ของตัวเอง
          </Body>
          <Body>
            ฝ่ายที่ตั้งคำถามชี้ว่าถ้า correlation ต่ำขนาดนี้ อาจหมายความว่า
            construct validity ของอย่างใดอย่างหนึ่งมีปัญหา ประเด็นนี้มีผลใหญ่มาก
            เพราะงานวิจัยส่วนใหญ่ในรอบ 20 ปีใช้ ECR (ง่ายกว่า AAI มาก)
            แต่อ้างว่าสรุปได้เกี่ยวกับ attachment representations<Ref>[16]</Ref>
          </Body>

          <SectionHeading>Debate 2: Stability vs Change</SectionHeading>
          <Body>
            งานวิจัย longitudinal (เช่น Fraley et al., 2013) พบว่า attachment
            style มี stability ในระดับปานกลาง (test-retest ในช่วง 1-4 ปีอยู่ที่{" "}
            <strong>r=.40-.60</strong>) แต่ Lewis et al. และนักวิจัยอื่นพบว่า
            life events ขนาดใหญ่ (divorce พ่อแม่, สูญเสียครั้งใหญ่,
            หรือความสัมพันธ์ที่ healing) สามารถเปลี่ยน classification
            ได้อย่างมีนัยสำคัญ ชี้ว่า attachment ยืดหยุ่นกว่าที่ early theorists
            เสนอ
          </Body>

          <SectionHeading>
            Debate 3: Context-Specificity vs Global Style
          </SectionHeading>
          <Body>
            Baldwin et al. พบว่าคนมักมี attachment style
            ที่แตกต่างกันในความสัมพันธ์ต่างๆ เช่น มี Secure กับแม่ แต่ Avoidant
            กับคู่รัก — ซึ่งตั้งคำถามว่า &quot;global attachment style&quot;
            มีจริงหรือไม่
          </Body>
          <Body>
            Mikulincer &amp; Shaver ตอบว่า Global Style และ
            Relationship-specific Style ต่างมีอยู่ทั้งคู่ใน{" "}
            <em>ลำดับชั้น (hierarchical structure)</em> โดย global style
            ทำหน้าที่เป็น default ในความสัมพันธ์ใหม่ แต่สามารถถูก override
            ด้วยประสบการณ์เฉพาะในความสัมพันธ์นั้น<Ref>[9]</Ref>
          </Body>

          <SectionHeading>Debate 4: Categorical vs Dimensional</SectionHeading>
          <Body>
            Fraley &amp; Waller (1998) ใช้ taxometric analysis แสดงว่า
            attachment ไม่ได้เป็น categorical (ไม่มี &quot;natural types&quot;
            ที่แบ่งแยกชัดเจน) แต่เป็น dimensional — ซึ่งหมายความว่า A/B/C/D เป็น
            convenience labels ไม่ใช่ discrete entities แต่นักวิจัยที่ใช้ AAI
            มักยืนยันว่าแนวทาง categorical ยังมีประโยชน์ในบริบทคลินิก
          </Body>
        </Chapter>

        <Divider />

        {/* ─── CH 15 (was CH 11) ─── */}
        <Chapter
          id="ch15"
          num="CHAPTER 15"
          title="Earned Security: Attachment Style เปลี่ยนได้ไหม?"
        >
          <Body>
            หนึ่งในคำถามที่ถูกถามมากที่สุดคือ: ถ้า Attachment Style
            ฝังลึกในระดับ Neural แล้ว มันเปลี่ยนได้ไหม? คำตอบสั้นคือ{" "}
            <strong>ได้ แต่ต้องเข้าใจว่าเปลี่ยนได้ในแบบไหน</strong>
          </Body>

          <SectionHeading>Earned Security คืออะไร?</SectionHeading>
          <Body>
            <Term>Earned Security</Term> คือ classification ที่ Mary Main พบใน
            AAI — คนที่มีประวัติวัยเด็กที่ยาก แต่กลับมี{" "}
            <em>Coherent Narrative</em> เกี่ยวกับประสบการณ์นั้น งานวิจัยของ
            Pearson et al. (1994) พบว่า Earned Secure ไม่ได้แตกต่างจาก
            Continuous Secure ในด้านการเลี้ยงดูลูก — ข่าวดีอย่างมาก
            <Ref>[13]</Ref>
          </Body>

          <TheoryBox
            label="IMPORTANT CAVEAT"
            title='"เปลี่ยน" หมายความว่าอะไรกันแน่?'
          >
            <p>
              การเปลี่ยน Attachment Style ในผู้ใหญ่{" "}
              <strong>ไม่ได้หมายความว่า IWM เก่าหายไป</strong> แต่หมายความว่า
              IWM ใหม่ที่ more adaptive ถูกสร้างขึ้นและถูก access
              ได้ง่ายกว่าในสถานการณ์ปกติ แต่ IWM เก่ายังคงอยู่และอาจถูก
              reactivate ได้ในช่วงที่มีความเครียดสูงมาก
              ซึ่งอธิบายว่าทำไมแม้แต่คนที่มี Earned Security
              บางครั้งยังกลับไปสู่ pattern เก่าในความสัมพันธ์ที่กดดันมาก
            </p>
          </TheoryBox>

          <SectionHeading>วิธีที่ Attachment เปลี่ยนได้</SectionHeading>

          <SubHeading>1. ความสัมพันธ์ที่มีคุณภาพสูงและสม่ำเสมอ</SubHeading>
          <Body>
            ความสัมพันธ์ที่ดีและสม่ำเสมอ — ไม่ว่าจะกับคู่รัก เพื่อนสนิท
            หรือนักบำบัด — สามารถ &quot;สอน&quot; สมองซ้ำๆ ว่าความใกล้ชิดปลอดภัย
            Fonagy เสนอว่า therapist ที่ Secure และมี RF สูงสามารถทำหน้าที่เป็น
            &quot;corrective attachment figure&quot; ได้
          </Body>

          <SubHeading>2. Emotion-Focused Therapy (EFT)</SubHeading>
          <Body>
            EFT (Sue Johnson) ออกแบบมาบนฐานของ Attachment Theory
            กระบวนการหลักคือช่วยให้คู่รักเข้าถึง &quot;Attachment Emotions&quot;
            ที่ซ่อนอยู่ใต้พฤติกรรม<Ref>[14]</Ref>
          </Body>

          <SubHeading>3. Mentalization-Based Treatment (MBT)</SubHeading>
          <Body>
            MBT ช่วยให้ผู้รับการบำบัดพัฒนาความสามารถในการ Mentalize
            โดยเฉพาะในบริบทของความสัมพันธ์ใกล้ชิด
          </Body>

          <SubHeading>4. Narrative Processing</SubHeading>
          <Body>
            การสร้าง coherent narrative เกี่ยวกับประสบการณ์วัยเด็กที่ยากลำบาก
            ไม่ใช่การ rewrite ประวัติศาสตร์ แต่เป็นการ integrate ทั้ง positive
            และ negative aspects ด้วย perspective ที่ balanced —
            เป็นหนึ่งในกลไกหลักที่ Main เชื่อว่าทำให้เกิด Earned Security
          </Body>

          <HighlightBlock>
            <p>
              <strong>Experiential vs Cognitive:</strong> สิ่งที่ดูเหมือนจะ
              &quot;work&quot; มักเป็น experiential interventions —
              การมีประสบการณ์จริงๆ ที่ขัดแย้งกับ IWM เดิม ซ้ำๆ กัน
              ในบริบทที่มีความปลอดภัย ไม่ใช่แค่การ &quot;เข้าใจ&quot;
              ว่าตัวเองเป็น Avoidant — ความเข้าใจทางปัญญาเป็นจุดเริ่มต้น
              แต่ไม่ใช่จุดสิ้นสุด
            </p>
          </HighlightBlock>

          <NoteBox label="Fearful vs Dismissive ใน Therapy">
            <p>
              Fearful-Avoidant มักตอบสนองต่อ therapy ได้ดีกว่า เพราะพวกเขา{" "}
              <em>รู้ว่าตัวเองต้องการความสัมพันธ์</em> และมีแรงจูงใจ ส่วน
              Dismissive-Avoidant มักไม่รู้สึกว่าตัวเองมีปัญหา และมักเข้า
              therapy เพราะคนรอบข้าง — ซึ่งต้องใช้ approach ที่ต่างออกไป
            </p>
          </NoteBox>

          <PullQuote>
            เป้าหมายไม่ใช่การลืมอดีต แต่คือการสร้างเรื่องเล่าที่ coherent
            ที่รับรู้ทั้งความยากลำบากและผลกระทบของมัน โดยไม่ถูกครอบงำโดยมัน
          </PullQuote>

          <HighlightBlock>
            <p>
              <strong>สรุปจากมุมมองทฤษฎี:</strong> Avoidant Attachment ไม่ใช่
              &quot;โรค&quot; หรือ &quot;ความบกพร่อง&quot;
              แต่เป็นระบบจิตใจและสมองที่พัฒนาขึ้นในสภาพแวดล้อมเฉพาะ
              การเข้าใจมันในระดับทฤษฎีที่ลึกนี้ไม่ได้หมายความว่าต้องยอมรับมันตลอดไป
              แต่เป็นจุดเริ่มต้นของการเปลี่ยนแปลงที่แท้จริง
            </p>
          </HighlightBlock>
        </Chapter>
      </div>

      <References />
    </>
  );
}
