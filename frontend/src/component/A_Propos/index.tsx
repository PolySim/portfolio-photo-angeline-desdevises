import React from "react";
import { Propos } from "src/styled";
import Share from "src/component/Share";

export default function A_Propos(): JSX.Element {
  return (
    <>
      <Propos>
        <div>
          <div>
            <img
              src={require("./portrait.jpg")}
              alt="Portrait d'Angeline Desdevises"
            />
          </div>
          <div>
            <h1>Biographie (fr)</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsam, velit aspernatur eius labore odio voluptate debitis
              quibusdam cumque, beatae ad quam ea maiores consequuntur culpa
              magni omnis adipisci voluptatem quaerat sunt, mollitia sit natus.
              Quae et esse id ad, aperiam, modi repellat voluptatum adipisci
              nemo itaque dolores quisquam corrupti? Repudiandae necessitatibus
              sit labore aspernatur. Ex, facere, eligendi neque quasi quae in,
              quidem repellendus culpa aperiam totam iure. Officia modi minima
              aut tenetur esse ex fugit dolorum placeat doloribus. Id repellat
              quo recusandae dolore est perferendis facere, cumque facilis
              necessitatibus dignissimos modi maiores possimus aliquam,
              voluptates cum, veritatis amet officiis ducimus. Consectetur quasi
              optio, velit animi repellendus reprehenderit veritatis
              voluptatibus illum. Quas ea maiores omnis nam molestiae vitae
              culpa magnam quos corporis similique ipsam veritatis maxime,
              quidem, laudantium incidunt quibusdam enim, magni qui sunt sequi.
              Quia molestiae provident perspiciatis nesciunt voluptatem
              pariatur? Odit quas unde nulla? Amet minima iure in?
            </div>
            <h4>Biography (EN)</h4>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, labore. Ipsam natus provident illo, tempora pariatur
              doloremque quas optio consequatur quam impedit temporibus mollitia
              quibusdam, esse quod cumque odio atque deleniti accusamus? Quaerat
              beatae ducimus accusantium voluptatibus animi adipisci illo
              numquam nesciunt molestias quos tenetur consequuntur excepturi
              modi corporis rem natus, id reprehenderit? Corrupti est, ad
              recusandae consectetur veritatis doloremque velit, tempora ut
              laudantium alias quaerat voluptas? Reprehenderit, cumque ea. Sunt
              doloremque aliquid odit veritatis facilis provident omnis, esse
              tenetur commodi unde, fugit quibusdam ut quisquam consectetur
              voluptas assumenda! Temporibus iste laborum modi qui quo odit
              fuga, officia provident vero cupiditate cumque officiis quasi
              laudantium magnam labore dolorem soluta nihil blanditiis, nisi
              doloribus omnis, eos ab eaque. Odit reiciendis amet tempore omnis
              maxime inventore, eius saepe excepturi explicabo laudantium illum
              voluptatibus reprehenderit ratione exercitationem at sapiente.
              Excepturi, modi ipsa? Blanditiis ut voluptatem vitae aut quos
              reiciendis placeat harum. Ullam, sequi!
            </div>
          </div>
        </div>
      </Propos>
      <Share footer={true} />
    </>
  );
}
