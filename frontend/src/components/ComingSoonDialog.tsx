import { useEffect, useRef } from 'react';
import { ArrowRight, Info, X } from 'lucide-react';
import { plannedPageCopy, type PlannedPage } from '../data/homepage';

type ComingSoonDialogProps = {
  page: PlannedPage | null;
  onClose: () => void;
};

export function ComingSoonDialog({ page, onClose }: ComingSoonDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (page && !dialog.open) dialog.showModal();
    if (!page && dialog.open) dialog.close();
  }, [page]);

  const copy = page ? plannedPageCopy[page] : null;

  return (
    <dialog
      ref={dialogRef}
      className="phase-dialog"
      aria-labelledby="phase-dialog-title"
      aria-describedby="phase-dialog-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {copy && (
        <div className="phase-dialog__body">
          <button type="button" className="phase-dialog__close" onClick={onClose} aria-label="Close dialog">
            <X size={20} aria-hidden="true" />
          </button>
          <span className="phase-dialog__icon"><Info size={27} aria-hidden="true" /></span>
          <h2 id="phase-dialog-title">{copy.title}</h2>
          <p id="phase-dialog-description">{copy.description}</p>
          <button type="button" className="button button--primary phase-dialog__action" onClick={onClose}>
            Back to homepage <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}
