// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiSwitchModule } from "../../angular2-ui-switch/src";

// Components
import { AppComponent } from "./app.component";
import { VariantSelectorComponent } from "./routes/entry-and-visualization/variant-selector/variant-selector.component";
import { SMARTLaunchComponent } from "./smart-initialization/smart-launch.component";
import { SMARTTokenReceptionComponent } from "./smart-initialization/smart-token-reception.component";
import { FilterableSearchComponent } from "./routes/entry-and-visualization/filterable-search/filterable-search.component";
import { AssocsComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/assocs.component";
import { DrugModalComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component";
import { DiseaseModalComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component";
import { NoFileChosenModalComponent } from "./routes/vcf-reader/modals/no-file-chosen-modal.component"
import { FileInstructionsModalComponent } from "./routes/vcf-reader/modals/file-instructions-modal.component"
import { ServerErrorModalComponent } from "./routes/vcf-reader/modals/server-error-modal.component";
import { DownloadErrorModalComponent } from "./routes/ehr-login/download-error-modal.component"

import { ClinicalTrialsComponent } from "./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component";
import { DrugDetailsModalComponent } from "./routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component";
import { GeneInformationComponent } from "./routes/entry-and-visualization/variant-visualization/gene/gene-information.component";
import { VariantInformationComponent } from "./routes/entry-and-visualization/variant-visualization/variant/variant-information.component";
import { VariantVisualizationComponent } from "./routes/entry-and-visualization/variant-visualization/variant-visualization.component";
import { EHRLoginComponent } from "./routes/ehr-login/ehr-login.component";
import { FeedbackFormModalComponent } from "./routes/feedback-form/feedback-form-modal.component";
import { HeaderComponent } from "./universal-components/header.component";
import { ClassificationsModalComponent } from "./routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component";
import { VariantEntryAndVisualizationComponent } from "./routes/entry-and-visualization/variant-entry-and-visualization.component";
import { LandingPageComponent } from "./routes/home/home.component";
import { GithubForkUsComponent } from "./universal-components/github-fork-us.component";
import { TeamComponent } from "./routes/team/team.component";
import { DBAnalysisComponent } from "./routes/db-analysis/db-analysis.component";
import { VCFUploadComponent } from "./routes/vcf-reader/vcf-upload.component";

// Services
import { SMARTReferenceService } from "./smart-initialization/smart-reference.service";
import { MyVariantInfoSearchService } from "./routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service";
import { AssocsService } from "./routes/entry-and-visualization/variant-visualization/assocs/assocs.service";
import { ClinicalTrialsService } from "./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service";
import { VariantSelectorService } from "./routes/entry-and-visualization/variant-selector/variant-selector.service";
import { DrugsSearchService } from "./routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service";
import { MyGeneInfoSearchService } from "./routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service";
import { JSONNavigatorService } from "./routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service";
import { FileParsingService } from "./routes/vcf-reader/file-parsing.service";
import { VCFMyVariantInfoSearchService } from "./routes/vcf-reader/vcf-myvariantinfo-search.service";
import { ObjectConvertToVariantService } from "./routes/vcf-reader/object-convert-to-variant.service";
import { RestService } from "./routes/vcf-reader/rest.service"
import { FhirDownloadService } from "./routes/vcf-reader/fhir-download.service"
import { DownloadZipsService } from "./routes/login-services/download-zips.service"

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    UiSwitchModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    VariantEntryAndVisualizationComponent,
    VariantVisualizationComponent,
    VariantSelectorComponent,
    SMARTLaunchComponent,
    SMARTTokenReceptionComponent,
    FilterableSearchComponent,
    VariantInformationComponent,
    ClinicalTrialsComponent,
    AssocsComponent,
    DrugModalComponent,
    DiseaseModalComponent,
    GeneInformationComponent,
    DrugDetailsModalComponent,
    ClassificationsModalComponent,
    EHRLoginComponent,
    LandingPageComponent,
    GithubForkUsComponent,
    FeedbackFormModalComponent,
    TeamComponent,
    DBAnalysisComponent,
    VCFUploadComponent,
    NoFileChosenModalComponent,
    FileInstructionsModalComponent,
    ServerErrorModalComponent,
    DownloadErrorModalComponent
  ],
  entryComponents: [
    DrugDetailsModalComponent, // Since it enters later on in the flow.
    ClassificationsModalComponent,
    DrugModalComponent,
    DiseaseModalComponent,
    FeedbackFormModalComponent,
    NoFileChosenModalComponent,
    FileInstructionsModalComponent,
    ServerErrorModalComponent,
    DownloadErrorModalComponent
  ],
  providers: [
    SMARTReferenceService,
    VariantSelectorService,
    MyVariantInfoSearchService,
    MyGeneInfoSearchService,
    AssocsService,
    ClinicalTrialsService,
    DrugsSearchService,
    JSONNavigatorService,
    FileParsingService,
    VCFMyVariantInfoSearchService,
    ObjectConvertToVariantService,
    RestService,
    FhirDownloadService,
    DownloadZipsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
