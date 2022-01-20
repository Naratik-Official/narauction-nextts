import React from "react";

import GuidelinesHeader from "components/GuidelinesHeader";
import Grid from "@mui/material/Grid";

import styles from "styles/Guidelines.module.css";
import TabLinks from "components/TabLinks";
import Layout from "components/Layout";

export default function GuidelinesBuyers1() {
  return (
    <Layout>
      <Grid container>
        <GuidelinesHeader />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <main className={styles.root}>
            <TabLinks
              className={styles.tabs}
              items={[
                {
                  label: "Tab 1",
                  href: "/guidelines/buyers/1",
                },
                {
                  label: "Tab 2",
                  href: "/guidelines/buyers/2",
                },
                {
                  label: "Tab 3",
                  href: "/guidelines/buyers/3",
                },
              ]}
            />
            <p>
              1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              libero vestibulum commodo arcu tempus. Urna cursus aliquet
              suspendisse vitae nunc. Rhoncus, at turpis tincidunt morbi duis a
              mauris in. Consectetur metus nisl, orci ut proin leo id eget
              pretium. Integer nibh malesuada at magna orci, aliquam. Turpis
              morbi diam vestibulum tempor sit mattis faucibus. Ornare dui sed
              odio turpis nec. At pretium sed augue cursus leo commodo maecenas.
              Ornare quisque egestas in morbi faucibus in sed quam malesuada.
              Sit lacus vulputate venenatis id tincidunt pharetra.
              {"\n\n"}
              Augue suspendisse quis metus ultricies. Pretium lectus nam nibh
              faucibus. Rhoncus, lacinia elit tortor iaculis aliquet enim tortor
              eu. Pellentesque nunc, a, suscipit blandit purus maecenas dolor
              donec. Pharetra enim dui, at sem nunc. Bibendum vivamus massa
              lobortis sem placerat. {"\n\n"}
              Vitae at quis nulla erat viverra enim elementum dignissim egestas.
              Dui, augue platea lectus feugiat sed tortor arcu tristique. Non
              rhoncus nisi, amet, mauris. Adipiscing mi, consequat mi quis
              varius morbi ligula ullamcorper. Nec sollicitudin tristique amet
              mattis nunc viverra tincidunt. Mauris pretium tempus vestibulum
              nulla. Fames viverra adipiscing eleifend lacus. Aliquet egestas
              blandit gravida iaculis nullam in quam. {"\n\n"}
              Scelerisque non semper sit feugiat in lectus. Ac pulvinar facilisi
              et varius tortor malesuada et, elementum. Amet viverra lectus
              ullamcorper vulputate interdum tincidunt ultrices tristique non.
              Integer orci facilisi nunc sed morbi. Eleifend sem nam aliquam vel
              viverra elementum in faucibus aliquam. Blandit fermentum donec eu,
              nullam non in fames. Scelerisque morbi venenatis in interdum velit
              turpis viverra mattis. Curabitur duis nisi ipsum, adipiscing amet.
              Et viverra tristique fusce vestibulum vitae massa, auctor magna.
              Vel leo vitae aliquam, mattis. Et diam magna dui consectetur purus
              pretium leo. {"\n\n"}
              Risus feugiat magna in phasellus. Vel sed in integer tempor urna
              neque felis ipsum. Egestas semper id in adipiscing vitae nulla ac.
              Odio nulla facilisi justo, commodo vel facilisis nullam justo.
              Fermentum ornare nunc id nisl rutrum. Diam magna elit vel
              convallis arcu mi vestibulum vitae. Sagittis fusce ornare lacus,
              fusce quam interdum. Tellus lobortis dictum fringilla purus tellus
              quam eget. Risus eu netus.
            </p>
          </main>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Layout>
  );
}
