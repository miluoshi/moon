use miette::Diagnostic;
use moon_args::ArgsSplitError;
use moon_common::{Style, Stylize};
use thiserror::Error;

#[derive(Error, Debug, Diagnostic)]
pub enum ProcessError {
    #[diagnostic(code(process::capture::failed))]
    #[error(
        "Failed to execute {} and capture output.\n\n{}",
        .bin.style(Style::Shell),
        .error.to_string().style(Style::MutedLight),
    )]
    Capture {
        bin: String,
        #[source]
        error: std::io::Error,
    },

    #[error(
        "Process {} failed with a {} exit code.",
        .bin.style(Style::Shell),
        .code.style(Style::Symbol),
    )]
    ExitNonZero { bin: String, code: i32 },

    #[error(
        "Process {} failed with a {} exit code.\n\n{}",
        .bin.style(Style::Shell),
        .code.style(Style::Symbol),
        .output.style(Style::MutedLight),
    )]
    ExitNonZeroWithOutput {
        bin: String,
        code: i32,
        output: String,
    },

    #[diagnostic(code(process::stream::failed))]
    #[error(
        "Failed to execute {} and stream output.\n\n{}",
        .bin.style(Style::Shell),
        .error.to_string().style(Style::MutedLight),
    )]
    Stream {
        bin: String,
        #[source]
        error: std::io::Error,
    },

    #[diagnostic(code(process::capture_stream::failed))]
    #[error(
        "Failed to execute {} and stream and capture output.\n\n{}",
        .bin.style(Style::Shell),
        .error.to_string().style(Style::MutedLight),
    )]
    StreamCapture {
        bin: String,
        #[source]
        error: std::io::Error,
    },

    #[diagnostic(code(process::stdin::failed))]
    #[error(
        "Failed to write stdin to {}.\n\n{}",
        .bin.style(Style::Shell),
        .error.to_string().style(Style::MutedLight),
    )]
    WriteInput {
        bin: String,
        #[source]
        error: std::io::Error,
    },

    #[diagnostic(transparent)]
    #[error(transparent)]
    ArgsSplit(#[from] ArgsSplitError),
}