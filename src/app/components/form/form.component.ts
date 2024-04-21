import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {
    FormArray,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from "@angular/forms";

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})

export class FormComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            modelName: ['', Validators.required],
            modelDescription: ['', [
                Validators.minLength(5),
                Validators.maxLength(20)
            ]],
            modelAuthor: [''],
            modelType: [null, Validators.required],
            modelBase: [null, Validators.required],
            modelLicense: this.fb.array([
                this.fb.control(false),
                this.fb.control(false),
                this.fb.control(false),
                this.fb.control(false),
            ]),
        });
    }

    get modelLicense() {
        return this.form.get('modelLicense') as FormArray;
    }

    addLicense = () => {
        this.modelLicense.push(new FormGroup(false));
    };

    onSubmit() {
        if (this.form.valid) {
            console.log('Form submitted');
            console.log(this.form.value);
            console.log(this.selectedFile);
            console.log(this.selectedImg);
        } else {
            console.log('Form invalid');
        }
    }

    selectedFile: File | null = null;
    selectedImg: File | null = null;

    onFileSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        if (file) {
            const selectedFile = file[0];

            // Validate file size
            const maxFileSize = 1024 * 1024 * 10; // 10MB
            if (selectedFile.size > maxFileSize) {
                console.log('File size too large');
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
                alert('Invalid file type. Only .zip, .rar, .7z, .tar.gz, .tar.bz2, .tar.xz, .tar files are allowed');
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
                console.log('File size too large');
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
                alert('Invalid file type. Only .zip, .rar, .7z, .tar.gz, .tar.bz2, .tar.xz, .tar files are allowed');
                return;
            }
            this.selectedImg = selectedImg;
        }
    }
}
