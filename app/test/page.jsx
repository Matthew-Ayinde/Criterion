import Image from "next/image";
import mountains from "@/public/Web/Backgrounds/PNG/Hero-BG.png";

const Fill = () => (
  <div className="px-40">
    <div className="backgroundImage">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat amet aliquam eligendi, ipsam provident commodi. Dolore, numquam libero? Neque atque quidem nam voluptate dignissimos dolores laboriosam unde assumenda aliquam praesentium, corrupti sapiente facilis. Cum, odio. Amet eius doloremque nesciunt velit voluptatem enim itaque fuga architecto harum. Deleniti facere, consequatur ducimus omnis, repudiandae pariatur reprehenderit ipsum officia dolore vitae, rem fugit eveniet corporis inventore error cumque molestiae? Modi, saepe tenetur? Ut dolore quidem beatae sapiente provident, facere ducimus quam corporis id, assumenda neque perferendis laudantium quos at. Ea laudantium quaerat itaque, eveniet officiis odit fuga voluptatibus ducimus autem unde quae, excepturi quasi praesentium debitis minus dolore voluptas inventore eius magni totam voluptate animi odio iusto tempore? Architecto necessitatibus ex sed atque sit ipsum velit hic, tempore vero quos fuga deleniti, maxime ad aperiam soluta, quo voluptatem similique mollitia magnam. Necessitatibus id molestiae mollitia tempore fuga repudiandae eum distinctio iusto a aliquam sapiente quae possimus enim dicta tempora, nemo porro doloribus. Dicta inventore facere laudantium commodi aliquam vel illum fugiat error velit dolore, maiores sunt unde quibusdam, quod minima temporibus repudiandae deserunt alias assumenda modi neque delectus iusto recusandae? Praesentium molestias nulla laudantium nostrum? Eos assumenda eveniet animi optio voluptatibus corrupti, veritatis in repudiandae dicta sint quaerat ea nisi quidem, et excepturi, laborum mollitia sapiente eum cumque impedit facere placeat esse. Id assumenda quasi voluptatum consectetur facere ratione, voluptatibus officiis a, nemo debitis quas aspernatur enim, adipisci temporibus dolorem dicta! Architecto blanditiis ex aliquid beatae facere minima sint maiores vitae, doloremque culpa numquam eligendi sed, voluptatum quaerat explicabo molestias tempora natus. Magnam similique nihil eligendi alias voluptates enim. Cumque laudantium iste minus blanditiis, libero harum explicabo debitis voluptatum quis nemo ipsam similique asperiores, officiis ducimus animi ex nihil provident? Sapiente impedit doloremque iusto ex laboriosam ratione nostrum, perferendis porro cum qui quibusdam pariatur voluptas officia ut quisquam mollitia commodi quia odit inventore consequatur maxime dolorum corporis! Facilis, temporibus eaque quis modi ipsam consectetur fugiat ratione ut facere. Pariatur adipisci reprehenderit dolor doloribus dolores quidem, optio est a animi similique qui dolorum ullam magnam odio delectus enim maiores accusamus atque ea. Quam consectetur, neque sed hic quod suscipit libero vel voluptas ea tempora odit nemo? Est ex harum id impedit? Eius a accusamus neque veniam alias corporis magni culpa nesciunt natus ipsa, minima, exercitationem debitis nam id totam molestias earum eveniet, ex placeat. Quos, sit error inventore numquam dicta voluptatum adipisci magni!</div>
    <h1>Image Component With Layout Fill</h1>
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <Image
        alt="Mountains"
        src={mountains}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <Image
        alt="Mountains"
        src={mountains}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
        }}
      />
      <div className="relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit amet perspiciatis cum aut cupiditate at quo ducimus nobis incidunt est, rem autem consequatur, consequuntur vero laudantium laborum architecto illum.</div>
    </div>
    <div style={{ position: "relative", width: "300px", height: "500px" }}>
      <Image
        alt="Mountains"
        src={mountains}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "none",
        }}
      />
    </div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque assumenda possimus corrupti! Fugit tempora quo soluta exercitationem, laborum quia eius aliquid. Aspernatur unde ab incidunt a dolorem hic quis corporis aut pariatur, debitis, dolore quod. Dolor distinctio aut autem, perspiciatis ut, natus recusandae doloribus earum velit ipsam similique eum quam quaerat explicabo molestiae, laborum molestias animi labore libero commodi in ducimus voluptatem voluptates? Dolor deserunt magnam consectetur, dicta unde neque eum dolorum nobis ut id recusandae excepturi, quibusdam inventore distinctio explicabo tempora voluptates consequuntur earum. Cum quo ab quam obcaecati dolor ad doloribus ullam est voluptates molestias deleniti debitis nam, iure molestiae harum consectetur! Ab perspiciatis nostrum perferendis repellat voluptate alias asperiores, consectetur provident, odit suscipit, quas mollitia quos maxime. Non ipsam, quibusdam incidunt accusamus aperiam fugit expedita! Temporibus consequuntur aperiam maiores asperiores atque perspiciatis nulla, minus in vel ratione eos. Molestiae quas, alias vel, ex praesentium sapiente aliquam voluptas nostrum, quam ipsa pariatur iusto consectetur saepe odit unde facilis sint! Pariatur animi tempore modi molestiae consequuntur fuga dolorem autem, porro obcaecati, natus voluptatibus hic, perferendis officiis doloribus aperiam. Quae perspiciatis reprehenderit reiciendis corporis consequatur rem dicta nemo. Similique iure ipsa praesentium atque modi ducimus suscipit beatae animi, doloremque perspiciatis hic, veniam eligendi quisquam optio voluptate inventore rem pariatur deleniti consectetur mollitia. Commodi qui, deserunt facilis ut quis aspernatur quo illum libero eum, nulla autem nostrum minima! Corrupti numquam voluptatum nesciunt at unde. Debitis illum hic omnis enim sapiente, porro, dolores obcaecati a molestiae cumque atque nobis nam mollitia iure nulla vitae cum, possimus recusandae voluptatibus quae autem maiores corporis sint nihil! Vel harum eum earum voluptatem doloremque accusantium quisquam, dignissimos nemo voluptas magni corrupti error soluta, cumque similique omnis velit ipsa ducimus! Vel minima placeat ipsa, temporibus blanditiis repellendus obcaecati excepturi consectetur a! Placeat quas natus ipsa ipsam autem aut, distinctio enim ut quis fugit rerum, quo rem dolorem repudiandae vero ducimus aliquid earum nulla veritatis dicta soluta. Soluta iste necessitatibus nesciunt iusto. Asperiores temporibus, quos laborum accusamus non quas iusto aspernatur incidunt laudantium sunt possimus ut deleniti, numquam quae. Quidem nihil maiores sunt, mollitia officiis molestias soluta nulla, ipsum, quae ipsa amet ullam reiciendis nesciunt sint! Aperiam atque voluptatum dignissimos. Harum ipsa nemo inventore in soluta distinctio tempore accusamus corporis aperiam magnam quae ullam ipsum, reiciendis pariatur temporibus tempora voluptatibus praesentium quasi cupiditate magni quis iure, quas rem. Hic eveniet ea officiis harum maxime magni eius quibusdam explicabo vel repellat, rerum, omnis quos mollitia. Commodi expedita excepturi reprehenderit minus totam deserunt error maxime reiciendis perferendis, doloribus cumque, rerum ad voluptatem voluptate asperiores debitis. Nihil id necessitatibus recusandae magnam? Nam non repellendus cumque quas at earum quos, ullam rem, vel cupiditate unde, expedita culpa. Aut iste, esse quibusdam, quaerat exercitationem ab modi maxime dignissimos incidunt ducimus obcaecati iusto. Quia praesentium animi sequi aliquid maxime suscipit fugiat iure recusandae, sint in libero magnam, odio totam voluptates modi neque excepturi consequatur. Consequatur, rerum debitis at nisi dignissimos fuga, laudantium quisquam consectetur assumenda earum id rem facere optio quibusdam minus? Nesciunt, iste.
  </div>
);

export default Fill;