import { useState } from "react";
import { CheckCircle2, Upload, X, Film } from "lucide-react";

const genres = [
  "Comedy", "Family Drama", "Action", "Thriller", "Crime", "Horror",
  "Love Story", "Fantasy", "Mythology", "Period Drama", "Sci-Fi", "Other"
];

const targetAudiences = [
  "Family Audience", "Youth Audience", "Mass Audience",
  "Multiplex Audience", "PAN India Audience", "OTT Audience"
];

const budgetRanges = [
  "Under ₹5 Cr", "₹5-15 Cr", "₹15-30 Cr", "₹30-50 Cr", "₹50 Cr+"
];

const franchisePotentials = [
  "Single Film", "Sequel Possible", "Franchise Potential"
];

const heroCategories = [
  "Star Hero", "Mid-range Hero", "New Hero"
];

export default function StorySubmission() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const handleAudienceToggle = (audience: string) => {
    setSelectedAudiences(prev =>
      prev.includes(audience) ? prev.filter(a => a !== audience) : [...prev, audience]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with email service (Formspree, EmailJS, etc.)
    setSubmitted(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-primary-foreground shadow-glow mb-6">
            <Film className="h-8 w-8" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Trishul Visionary Studios</p>
          <h1 className="mt-4 max-w-4xl mx-auto font-display text-5xl leading-tight sm:text-7xl">
            Story <span className="text-gradient-gold">Submission</span> Form
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a story worth telling? Submit your concept for review by our creative team.
            We're looking for compelling narratives with cinematic potential.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-10">
        {submitted ? (
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-10 sm:p-16">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col items-center justify-center py-16 text-center animate-fade-up">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-glow">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="mt-8 font-display text-4xl sm:text-5xl">
                Thank You for Your <span className="text-gradient-gold">Submission</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Your story has been submitted successfully. Our creative team will review your submission
                and get back to you within 2-4 weeks if it aligns with our current slate.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSelectedGenres([]);
                  setSelectedAudiences([]);
                  setUploadedFiles([]);
                }}
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Submit Another Story
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 sm:p-10">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            
            <div className="relative space-y-12">
              {/* Writer Details */}
              <div>
                <h2 className="font-display text-3xl text-gradient-gold mb-2">Writer Details</h2>
                <p className="text-sm text-muted-foreground mb-8">Tell us about yourself</p>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Writer Name *" fullWidth>
                    <input required type="text" placeholder="Your full name" className="form-input" />
                  </FormField>
                  <FormField label="Mobile Number *">
                    <input required type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" />
                  </FormField>
                  <FormField label="Email *">
                    <input required type="email" placeholder="you@example.com" className="form-input" />
                  </FormField>
                  <FormField label="City">
                    <input type="text" placeholder="Your city" className="form-input" />
                  </FormField>
                  <FormField label="Previous Released Films" fullWidth>
                    <input type="text" placeholder="List your previous work (if any)" className="form-input" />
                  </FormField>
                  <FormField label="Languages Comfortable In" fullWidth>
                    <input type="text" placeholder="Telugu, Hindi, English, etc." className="form-input" />
                  </FormField>
                </div>
              </div>

              {/* Story Details */}
              <div className="border-t border-border/40 pt-12">
                <h2 className="font-display text-3xl text-gradient-gold mb-8">Story Details</h2>
                
                <div className="space-y-6">
                  <FormField label="Working Title *">
                    <input required type="text" placeholder="Your story title" className="form-input" />
                  </FormField>

                  <FormField label="Genre * (Select all that apply)">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                      {genres.map(genre => (
                        <label key={genre} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedGenres.includes(genre)}
                            onChange={() => handleGenreToggle(genre)}
                            className="peer sr-only"
                          />
                          <span className="block rounded-lg border border-border bg-background/40 px-3 py-2.5 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/50">
                            {genre}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FormField>

                  <FormField label="Logline * (Maximum 50 Words)">
                    <textarea
                      required
                      rows={3}
                      maxLength={250}
                      placeholder="Describe the story in one powerful sentence..."
                      className="form-input resize-none"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">One sentence that captures the essence of your story</p>
                  </FormField>

                  <FormField label="Story Synopsis * (Maximum 1 Page)">
                    <textarea
                      required
                      rows={12}
                      placeholder="Must include: Beginning, Main Conflict, Interval, Climax, Ending (No suspense withholding)"
                      className="form-input resize-none"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Provide a complete synopsis including all major plot points
                    </p>
                  </FormField>
                </div>
              </div>

              {/* Hero Profile */}
              <div className="border-t border-border/40 pt-12">
                <h3 className="font-display text-2xl text-gradient-gold mb-6">Hero Profile</h3>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Age">
                    <input type="text" placeholder="Hero's age" className="form-input" />
                  </FormField>
                  <FormField label="Background">
                    <input type="text" placeholder="Character background" className="form-input" />
                  </FormField>
                  <FormField label="Character Arc" fullWidth>
                    <textarea rows={3} placeholder="How does the hero transform?" className="form-input resize-none" />
                  </FormField>
                  <FormField label="Hero Category *" fullWidth>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {heroCategories.map(cat => (
                        <label key={cat} className="cursor-pointer">
                          <input type="radio" name="heroCategory" required className="peer sr-only" />
                          <span className="block rounded-lg border border-border bg-background/40 px-3 py-3 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/50">
                            {cat}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FormField>
                </div>
              </div>

              {/* Why Will Audience Buy A Ticket */}
              <div className="border-t border-border/40 pt-12">
                <FormField label="Why Will Audience Buy A Ticket? * (Maximum 5 Points)">
                  <div className="space-y-3 mt-3">
                    {[1, 2, 3, 4, 5].map(num => (
                      <input
                        key={num}
                        type="text"
                        placeholder={`Point ${num}`}
                        required={num <= 3}
                        className="form-input"
                      />
                    ))}
                  </div>
                </FormField>
              </div>

              {/* Comparable Films */}
              <div>
                <FormField label="Comparable Films (Closest 3 Films)">
                  <div className="space-y-3 mt-3">
                    {[1, 2, 3].map(num => (
                      <input
                        key={num}
                        type="text"
                        placeholder={`Film ${num}`}
                        className="form-input"
                      />
                    ))}
                  </div>
                </FormField>
              </div>

              {/* Target Audience */}
              <div>
                <FormField label="Target Audience * (Select all that apply)">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                    {targetAudiences.map(audience => (
                      <label key={audience} className="cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAudiences.includes(audience)}
                          onChange={() => handleAudienceToggle(audience)}
                          className="peer sr-only"
                        />
                        <span className="block rounded-lg border border-border bg-background/40 px-3 py-2.5 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/50">
                          {audience}
                        </span>
                      </label>
                    ))}
                  </div>
                </FormField>
              </div>

              {/* Budget Range */}
              <div>
                <FormField label="Budget Range *">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                    {budgetRanges.map(range => (
                      <label key={range} className="cursor-pointer">
                        <input type="radio" name="budget" required className="peer sr-only" />
                        <span className="block rounded-lg border border-border bg-background/40 px-3 py-2.5 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/50">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </FormField>
              </div>

              {/* Franchise Potential */}
              <div>
                <FormField label="Franchise Potential *">
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {franchisePotentials.map(potential => (
                      <label key={potential} className="cursor-pointer">
                        <input type="radio" name="franchise" required className="peer sr-only" />
                        <span className="block rounded-lg border border-border bg-background/40 px-3 py-3 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/50">
                          {potential}
                        </span>
                      </label>
                    ))}
                  </div>
                </FormField>
              </div>

              {/* File Upload */}
              <div className="border-t border-border/40 pt-12">
                <FormField label="Attached Material">
                  <div className="mt-3">
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-xl cursor-pointer bg-background/40 hover:bg-background/60 hover:border-primary/50 transition-all">
                      <Upload className="h-10 w-10 text-muted-foreground mb-3" />
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX, ZIP (Max 50MB)
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Synopsis, Screenplay, Scene Order, Character Sketches, Mood Board
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.zip"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/40">
                            <span className="text-sm text-foreground truncate flex-1">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="ml-3 text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FormField>
              </div>

              {/* Submit Button */}
              <div className="border-t border-border/40 pt-8">
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Submit Story
                  <Film className="h-5 w-5 transition-transform group-hover:scale-110" />
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  By submitting, you agree that the material is original and you own all rights to it.
                </p>
              </div>
            </div>
          </form>
        )}
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background-color: color-mix(in oklab, var(--background) 60%, transparent);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: all 200ms;
          outline: none;
        }
        .form-input::placeholder {
          color: var(--muted-foreground);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
        }
      `}</style>
    </>
  );
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

function FormField({ label, children, fullWidth }: FormFieldProps) {
  return (
    <label className={`block ${fullWidth ? 'sm:col-span-2' : ''}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
