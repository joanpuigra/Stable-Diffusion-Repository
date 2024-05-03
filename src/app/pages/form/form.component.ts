import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from "@angular/forms";
import {FormDataService} from "../../services/formData.service";
import {modelsInterface} from "../models/models.interface";

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})

export class FormComponent {
    form: FormGroup;
    selectedFile: File | null = null;
    selectedImg: File | null = null;

    constructor(
        private fb: FormBuilder,
        private formDataService: FormDataService,
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            description: ['', [
                Validators.minLength(5),
                Validators.maxLength(20),
            ]],
            author: [''],
            type: [null, Validators.required],
            base: [null, Validators.required],
            license: this.fb.array([false, false, false, false]),
        });
    };


    // get modelLicense() {
    //     return this.form.get('modelLicense') as FormArray;
    // }
    //
    // addLicense = () => {
    //     this.modelLicense.push(this.fb.control(false));
    // };

    onSubmit() {
        if (this.form.valid) {
            const formData: modelsInterface = {
                ...this.form.value,
                file: this.selectedFile,
                img: this.selectedImg,
            };

            // Send form data to the service
            this.formDataService.submitData(formData);
            console.log('Data submitted')
        } else {
            console.error('Invalid form data. Please check the form fields');
        }
    }

    onFileSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        if (file) {
            const selectedFile = file[0];

            // Validate file size
            const maxFileSize = 1024 * 1024 * 10; // 10MB
            if (selectedFile.size > maxFileSize) {
                alert(`File size too large (${selectedFile.size} bytes`);
                return;
            }

            // Validate file type
            const allowedFileTypes = [
                'application/zip',
                'application/x-rar-compressed',
                'application/x-7z-compressed',
                'application/gzip',
                'application/x-bzip2',
                'application/x-xz',
                'application/x-tar'
            ];

            if (!allowedFileTypes.includes(selectedFile.type)) {
                alert(
                    'Invalid file type. Only .zip, .rar, .7z, ' +
                    '.tar.gz, .tar.bz2, .tar.xz, .tar files are allowed'
                );
                return;
            }
            this.selectedFile = selectedFile;
        }
    }

    onImgSelected(event: Event) {
        const img = (event.target as HTMLInputElement).files;
        if (img) {
            const selectedImg = img[0];

            // Validate file size
            const maxImgSize = 1024 * 1024 * 10; // 10MB
            if (selectedImg.size > maxImgSize) {
                alert(`File size too large (${selectedImg.size} bytes`);
                return;
            }

            // Validate file type
            const allowedImgTypes = [
                'image/png',
                'image/jpeg',
                'image/webp',
                'image/svg+xml'
            ];

            if (!allowedImgTypes.includes(selectedImg.type)) {
                alert(
                    'Invalid file type. Only .png, .jpeg, ' +
                    '.webp, .svg files are allowed'
                );
                return;
            }
            this.selectedImg = selectedImg;
        }
    }
}
