import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const Bio = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Base Info</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator />
          <div className="gap-6 max-w-sm  mx-auto flex flex-col items-start mt-3 text-center">
            <p>Name : Jhon Doe</p>
            <p>I Am A : Male</p>
            <p>Lookin For : Female</p>
            <p>Marital Status : Single</p>
            <p>Age : 28</p>
            <p>Date Of Birth : 23-02-1994</p>
            <p>Address : Streop Rd, Peosur, Inphodux, USA.</p>
          </div>
        </CardContent>
      </Card>
      {/* myself summary */}
      <Card>
        <CardHeader>
          <CardTitle>Myself Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator />
          <p className="text-center mt-6">
            Collaboratively innovate compelling mindshare after prospective
            partnerships Competently sereiz long-term high-impact internal or
            "organic" sources via user friendly strategic themesr areas creat
            Dramatically coordinate premium partnerships rather than standards
            compliant technologies ernd Dramatically matrix ethical
            collaboration and idea-sharing through opensource methodologies and
            Intrinsicly grow collaborative platforms vis-a-vis effective
            scenarios. Energistically strategize cost effective ideas before the
            worke unde.
          </p>
        </CardContent>
      </Card>
      {/* looking for */}
      <Card>
        <CardHeader>
          <CardTitle>Looking For</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator />
          <div className="gap-6 max-w-sm  mx-auto flex flex-col items-start mt-4 text-center">
            <p>Things I'm looking for : I want a funny person</p>
            <p>What I like : I like to travel a lot</p>
          </div>
        </CardContent>
      </Card>
      {/* lifestyle */}
      <Card>
        <CardHeader>
          <CardTitle>LifeStyle</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator />
          <div className="gap-6 max-w-sm  mx-auto flex flex-col items-start mt-4 text-center">
            <p>Interest : Dogs,Cats</p>
            <p>Favorite vocations spot : Maldives, Bangladesh</p>
            <p>Smoking : Casual Smoker</p>
            <p>Language : English, French, Italian</p>
          </div>
        </CardContent>
      </Card>
      {/* physical info */}
      <Card>
        <CardHeader>
          <CardTitle>Physical Info</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator />
          <div className="gap-6 max-w-sm  mx-auto flex flex-col items-start mt-4 text-center">
            <p>Height : 5'8 ft</p>
            <p>Weight : 72 kg</p>
            <p>Hair Color : Black</p>
            <p>Language : English, French, Italian</p>
            <p>Eye Color : Brown</p>
            <p>Body Type : Tall</p>
            <p>Ethnicity : Middle Eastern</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Bio;
