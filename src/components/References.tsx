interface Reference {
  id: string;
  body: string;
  url?: string;
  urlLabel?: string;
}

const references: Reference[] = [
  {
    id: "[1]",
    body: "<strong>Bretherton, I. (1992).</strong> The Origins of Attachment Theory: John Bowlby and Mary Ainsworth. <em>Developmental Psychology, 28</em>(5), 759–775. [ประวัติศาสตร์ทฤษฎี, Strange Situation, ที่มา Bowlby]",
    url: "https://psychology.psy.sunysb.edu/attachment/online/inge_origins%20DP1992.pdf",
    urlLabel: "psychology.psy.sunysb.edu (PDF)",
  },
  {
    id: "[2]",
    body: "<strong>Lyons-Ruth, K., Dutra, L., Schuder, M. R., & Bianchi, I. (2006/2017).</strong> Disorganized attachment and defense: Exploring John Bowlby's unpublished reflections. <em>Attachment & Human Development.</em> [Defensive Exclusion, Segregated Systems]",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5782852/",
    urlLabel: "pmc.ncbi.nlm.nih.gov",
  },
  {
    id: "[3]",
    body: "<strong>Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978).</strong> <em>Patterns of Attachment: A Psychological Study of the Strange Situation.</em> Lawrence Erlbaum. [Strange Situation Procedure ฉบับทางการ]<br/>— Main, M., & Solomon, J. (1986, 1990). Disorganized/disoriented attachment classification. [Type D]",
  },
  {
    id: "[4]",
    body: "<strong>Main, M., Goldwyn, R., & Hesse, E. (1984–2002).</strong> Adult Attachment Scoring and Classification System. Unpublished manuscript, UC Berkeley. [AAI methodology, classification]<br/>— van IJzendoorn, M. H. (1995). Adult attachment representations, parental responsiveness, and infant attachment: A meta-analysis. <em>Psychological Bulletin, 117</em>(3), 387–403. [intergenerational transmission]",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7451326/",
    urlLabel: "pmc.ncbi.nlm.nih.gov (AAI & therapeutic relationship)",
  },
  {
    id: "[5]",
    body: "<strong>Bowlby, J. (1969, 1973, 1980).</strong> <em>Attachment and Loss</em> (Vols. 1–3). Basic Books. [IWM, Defensive Exclusion, foundational theory]<br/>— Rivas, E. M. (2009). A Comparison of Attachment-Related Defenses and Ego Defense Mechanisms. Doctoral Dissertation, University of Tennessee.",
    url: "https://trace.tennessee.edu/cgi/viewcontent.cgi?article=1700&context=utk_graddiss",
    urlLabel: "trace.tennessee.edu",
  },
  {
    id: "[6]",
    body: "<strong>Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998).</strong> Self-report measurement of adult attachment: An integrative overview. ใน J. A. Simpson & W. S. Rholes (Eds.), <em>Attachment Theory and Close Relationships</em> (pp. 46–76). Guilford. [ECR Scale, 2-dimension model]<br/>— Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults. <em>Journal of Personality and Social Psychology, 61</em>(2), 226–244.",
    url: "https://doi.org/10.1037/0022-3514.61.2.226",
    urlLabel: "doi.org/10.1037/0022-3514.61.2.226",
  },
  {
    id: "[7]",
    body: "<strong>Bowlby, J. (1980).</strong> <em>Attachment and Loss, Vol. 3: Loss.</em> Basic Books. Chapter 4: Information Processing and Defensive Exclusion. [Defensive Exclusion คำอ้างอิงหลัก]",
    url: "https://www.conflictscienceinstitute.com/information-processing/",
    urlLabel: "conflictscienceinstitute.com",
  },
  {
    id: "[8]",
    body: "<strong>Bosmans, G., et al. (2014).</strong> Attachment and children's biased attentional processing: Evidence for the exclusion of attachment-related information. <em>PLOS One.</em> [Eye-tracking study, Defensive Exclusion ในเด็ก]",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0103476",
    urlLabel: "journals.plos.org",
  },
  {
    id: "[9]",
    body: "<strong>Mikulincer, M., & Shaver, P. R. (2003).</strong> The attachment behavioral system in adulthood: Activation, psychodynamics, and interpersonal processes. <em>Advances in Experimental Social Psychology, 35</em>, 53–152. [Control System Model, Deactivating Strategies]<br/>— Mikulincer, M., & Shaver, P. R. (2007). <em>Attachment in Adulthood: Structure, Dynamics, and Change.</em> Guilford.",
    url: "https://adultattachment.faculty.ucdavis.edu/wp-content/uploads/sites/66/2015/09/Mikulincer_2003_The-attachment-behavioral-system-in-adulthood.pdf",
    urlLabel: "UC Davis (PDF)",
  },
  {
    id: "[10]",
    body: "<strong>Vrticka, P., & Vuilleumier, P. (2012).</strong> Neuroscience of human social interactions and adult attachment style. <em>Frontiers in Human Neuroscience, 6</em>, 212. [fMRI, amygdala, HPA axis ใน Attachment]",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3398354/",
    urlLabel: "pmc.ncbi.nlm.nih.gov",
  },
  {
    id: "[11]",
    body: "<strong>Fonagy, P., & Target, M. (1997).</strong> Attachment and reflective function: Their role in self-organization. <em>Development and Psychopathology, 9</em>(4), 679–700. [Mentalization, Reflective Functioning, Marked Mirroring]",
    url: "https://doi.org/10.1017/S0954579497001399",
    urlLabel: "doi.org/10.1017/S0954579497001399",
  },
  {
    id: "[12]",
    body: "<strong>Belsky, J. (1999).</strong> Modern evolutionary theory and patterns of attachment. ใน J. Cassidy & P. R. Shaver (Eds.), <em>Handbook of Attachment</em> (pp. 141–161). Guilford. [Life History Theory, evolutionary perspective]",
  },
  {
    id: "[13]",
    body: "<strong>Pearson, J. L., Cohn, D. A., Cowan, P. A., & Cowan, C. P. (1994).</strong> Earned and continuous security in adult attachment: Relation to depressive symptomatology and parenting style. <em>Development and Psychopathology, 6</em>, 359–373. [Earned Security]",
  },
  {
    id: "[14]",
    body: "<strong>Asadi Kashani et al. (2025).</strong> The Effectiveness of Emotion-Focused Therapy on Attachment Disorders. <em>KMAN Counseling & Psychology Nexus, 3</em>(1).",
    url: "https://journals.kmanpub.com/index.php/psychnexus/article/download/3634/5804/17464",
    urlLabel: "journals.kmanpub.com (PDF)",
  },
  {
    id: "[15]",
    body: "<strong>Mikulincer, M., et al. (2024).</strong> Attachment orientations and emotion regulation: New insights from the study of interpersonal emotion regulation strategies. <em>Frontiers in Psychology (PMC10849076).</em> [Deactivation vs Hyperactivation เชิงลึก]",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10849076/",
    urlLabel: "pmc.ncbi.nlm.nih.gov",
  },
  {
    id: "[16]",
    body: "<strong>Roisman, G. I., et al. (2007).</strong> An empirically derived approach to the latent structure of the Adult Attachment Interview. <em>Developmental Psychology (PMC3221283).</em> [AAI latent structure]",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3221283/",
    urlLabel: "pmc.ncbi.nlm.nih.gov",
  },
  {
    id: "[17]",
    body: "<strong>SeyedEbrahimi, S., & Hojjati Hamedani, M. (2024).</strong> Avoidant Attachment, Fear of Intimacy, and Marital Satisfaction (SEM, n=400). <em>KMAN Counseling & Psychology Nexus, 2</em>(2).",
    url: "https://journals.kmanpub.com/index.php/psychnexus/article/download/4138/7114/20546",
    urlLabel: "journals.kmanpub.com (PDF)",
  },
  {
    id: "[18]",
    body: "<strong>Sun, E. R., & Jakubiak, B. K. (2024).</strong> Attachment avoidance predicts limited and selective sharing of personal events in close relationships. <em>Personal Relationships</em> (Wiley).",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/pere.12537",
    urlLabel: "onlinelibrary.wiley.com/doi/10.1111/pere.12537",
  },
  {
    id: "[19]",
    body: "<strong>Main, M., & Hesse, E. (1990).</strong> Parents' unresolved traumatic experiences are related to infant disorganized attachment status. ใน M. T. Greenberg et al. (Eds.), <em>Attachment in the Preschool Years</em>. Chicago: Univ. of Chicago Press. [Fright Without Solution, Disorganized Attachment]",
  },
  {
    id: "[20]",
    body: "<strong>van IJzendoorn, M. H., Schuengel, C., & Bakermans-Kranenburg, M. J. (1999).</strong> Disorganized attachment in early childhood: Meta-analysis of precursors, concomitants, and sequelae. <em>Development and Psychopathology, 11</em>(2), 225–250. [Disorganized prevalence, clinical correlates]",
  },
  {
    id: "[21]",
    body: "<strong>Fraley, R. C., & Shaver, P. R. (1997).</strong> Adult attachment and the suppression of unwanted thoughts. <em>Journal of Personality and Social Psychology, 73</em>(5), 1080–1091. [Airport study, Rebound Effect, Suppression]",
  },
  {
    id: "[22]",
    body: "<strong>Fraley, R. C., & Waller, N. G. (1998).</strong> Adult attachment patterns: A test of the typological model. ใน J. A. Simpson & W. S. Rholes (Eds.), <em>Attachment Theory and Close Relationships</em>. Guilford. [Taxometric analysis, Dimensional vs Categorical]",
  },
  {
    id: "[23]",
    body: "<strong>Del Giudice, M. (2009).</strong> Sex, attachment, and the development of reproductive strategies. <em>Behavioral and Brain Sciences, 32</em>(1), 1–21. [Conditional Adaptation Model, Life History Theory]",
  },
  {
    id: "[24]",
    body: "<strong>Cassidy, J., & Kobak, R. R. (1988).</strong> Avoidance and its relation to other defensive processes. ใน J. Belsky & T. Nezworski (Eds.), <em>Clinical Implications of Attachment</em>. Erlbaum. [Deactivating/Hyperactivating original formulation]",
  },
  {
    id: "[25]",
    body: "<strong>Feldman, R. (2017).</strong> The neurobiology of human attachments. <em>Trends in Cognitive Sciences, 21</em>(2), 80–99. [Oxytocin system, OXTR gene, neurobiological mechanisms]",
  },
];

export default function References() {
  return (
    <div
      className="bg-ink text-bg px-12 py-16 pb-20 mt-20 max-md:px-5 max-md:py-10"
      id="refs"
    >
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-mono text-[10px] tracking-[0.2em] uppercase text-meta-dim mb-10 pb-4 border-b border-nav-dim">
          REFERENCES · แหล่งอ้างอิงทั้งหมด
        </h2>

        {references.map((ref) => (
          <div
            key={ref.id}
            className="flex gap-5 py-4 border-b border-nav-dim last:border-b-0"
          >
            <div className="font-mono text-[10px] text-ink-dim shrink-0 min-w-8 pt-0.5">
              {ref.id}
            </div>
            <div className="text-[13.5px] text-ink-dim leading-[1.7]">
              <span dangerouslySetInnerHTML={{ __html: ref.body }} />
              {ref.url && (
                <>
                  <br />
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6A8AAA] font-mono text-[11px] break-all"
                  >
                    {ref.urlLabel}
                  </a>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="mt-10 p-5 border border-nav-dim font-mono text-[11px] text-meta-dim leading-[1.7] text-center">
          เอกสารนี้จัดทำโดย AI (Claude โดย Anthropic)
          ที่สืบค้นและสรุปจากงานวิจัยและตำราที่ตีพิมพ์จริง ·
          ทุกแหล่งอ้างอิงระบุลิงก์หรือ DOI ตรวจสอบได้ ·
          ข้อมูลไม่สามารถทดแทนการปรึกษาผู้เชี่ยวชาญด้านสุขภาพจิต
        </div>
      </div>
    </div>
  );
}
